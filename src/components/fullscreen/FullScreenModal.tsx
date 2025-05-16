import { ReactNode, useEffect } from "react";
import '../challenge/Challenge.css';

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
            style={{
                position: "fixed",
                zIndex: 1000,
                top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0,0,0,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
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