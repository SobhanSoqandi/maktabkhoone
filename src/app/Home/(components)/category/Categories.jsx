"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import CategoryItem from "./CategoryItem";

export default function Categories({ categories }) {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [path, setPath] = useState([]);

  const wrapperRef = useRef(null);

  const isOpen = isHover || isClick;

  const treeCategories = useMemo(() => {
    const map = {};

    categories.forEach((item) => {
      map[item.id] = {
        ...item,
        children: [],
      };
    });

    const tree = [];

    categories.forEach((item) => {
      if (item.parent_id === null) {
        tree.push(map[item.id]);
      } else {
        map[item.parent_id]?.children.push(map[item.id]);
      }
    });

    return tree;
  }, [categories]);

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsClick(false);
        setPath([]);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleHover = (item, level) => {
    const next = path.slice(0, level);

    next[level] = item;

    setPath(next);
  };

  const columns = useMemo(() => {
    const result = [treeCategories];

    path.forEach((item) => {
      if (item.children?.length) {
        result.push(item.children);
      }
    });

    return result;
  }, [path, treeCategories]);



  return (
    <div
      ref={wrapperRef}
      className="inline-block relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);

        if (!isClick) {
          setPath([]);
        }
      }}
    >
      <button
        onClick={() => setIsClick((prev) => !prev)}
        className="flex items-center gap-2 shadow btn"
      >
        <HiOutlineViewGrid className="text-xl" />

        <span>دسته‌بندی دوره‌ها</span>
      </button>

      {isOpen && (
        <div className="right-0 z-50 absolute flex bg-white shadow-2xl mt-1 rounded-xl overflow-hidden">
          {columns.map((items, level) => (
            <div key={level} className="py-2 w-72">
              {items.map((item) => (
                <CategoryItem
                  key={item.id}
                  item={item}
                  level={level}
                  path={path}
                  handleHover={handleHover}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
