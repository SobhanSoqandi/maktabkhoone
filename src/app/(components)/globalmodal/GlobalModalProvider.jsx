"use client";

import { useEffect, useState } from "react";

import GlobalModalContext from "./GlobalModalContext";
import Modal from "../modal";
import Err404Modal from "./Err404Modal";
import { subscribeModal } from "@/lib/modalEmitter";

export default function GlobalModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);
  useEffect(() => {
    console.log("received modal:", name);
    const unsubscribe = subscribeModal((name) => {
      setActiveModal(name);
    });

    return unsubscribe;
  }, []);
  return (
    <GlobalModalContext.Provider
      value={{
        activeModal,
        setActiveModal,
      }}
    >
      {children}

      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <Modal.Window name="404">
          <Err404Modal />
        </Modal.Window>
      </Modal>
    </GlobalModalContext.Provider>
  );
}
