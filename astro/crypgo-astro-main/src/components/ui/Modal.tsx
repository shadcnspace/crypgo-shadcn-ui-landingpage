import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-background border border-border max-w-md w-full mx-4 rounded-xl p-8 pt-14 relative overflow-y-auto max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white text-xl"
        aria-label="Close"
      >
        ✕
      </button>
      {children}
    </div>
  </div>
);

export default Modal;
