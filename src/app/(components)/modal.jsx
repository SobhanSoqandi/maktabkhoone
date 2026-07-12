"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const ModalContext = createContext(null);

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal components must be used inside <Modal>");
  }

  return context;
}

function Modal({ children }) {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeModal !== null ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeModal]);

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        setActiveModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, name }) {
  const { setActiveModal } = useModal();

  if (!children) return null;

  return cloneElement(children, {
    onClick: (e) => {
      children.props.onClick?.(e);
      setActiveModal(name);
    },
  });
}

function Window({ children, name }) {
  const { activeModal, setActiveModal } = useModal();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeModal !== name) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal, name, setActiveModal]);

  if (!mounted) return null;

  if (activeModal !== name) return null;

  return createPortal(
    <div
      onClick={() => setActiveModal(null)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-xl bg-white shadow-xl"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

function Close() {
  const { setActiveModal } = useModal();

  return (
    <button
      onClick={() => setActiveModal(null)}
      className="absolute left-3 top-3"
    >
      <IoClose className="text-2xl text-blue-600 cursor-pointer" />
    </button>
  );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Close = Close;

export default Modal;
