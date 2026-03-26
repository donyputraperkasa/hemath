"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import type { ModalProps } from "@/types/modal.types";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children }: ModalProps) {
    // close on ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (open) {
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [open, onClose]);

    if (!open) return null;

return createPortal(
    <>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[999]"/>

        {/* Modal */}
        <div className="fixed inset-0 z-[1000] flex items-start justify-center p-4 overflow-y-auto" onClick={onClose}>
            <div className="w-full max-w-sm my-10 bg-white rounded-2xl shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
                {/* Close */}
                <div className="flex justify-end mb-2">
                    <button onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {children}
                
            </div>
        </div>
    </>,
    document.body
);
}