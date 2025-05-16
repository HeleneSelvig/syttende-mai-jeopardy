import { ReactNode, useEffect } from "react";
import '../challenge/Challenge.css';
import './FullScreenModal.css';

interface FullscreenModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function FullscreenModal({ open, onClose, children }: FullscreenModalProps) {
    useEffect(() => {
        if (!open) return;
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fullscreen-modal"
            onClick={onClose}
        >
            <div
                style={{ color: "white", fontSize: "2.5vw", maxWidth: "80vw", textAlign: "center" }}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div >
    );
}