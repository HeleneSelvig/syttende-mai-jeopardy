import { ReactNode, useEffect, useState } from "react"
import Cover from "../cover/Cover"
import './Slot.css'
import FullscreenModal from "../fullscreen/FullScreenModal";
import Challenge from "../challenge/Challenge";

interface SlotProps {
    id: string;
    coverText: string;
    challengeText: ReactNode;
}

export default function Slot({ id, coverText, challengeText }: SlotProps) {
    const [isChallengeVisible, setChallengeVisible] = useState<boolean>(() => {
        const cache = window.localStorage.getItem(id);
        return cache === "true";
    });

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        window.localStorage.setItem(`${id}`, String(isChallengeVisible))
    }, [isChallengeVisible, id]);

    const handleSlotClick = () => {
        setModalOpen(true);
        setChallengeVisible(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="slot-container" onClick={handleSlotClick}>
                {!isChallengeVisible && <Cover text={coverText} />}
                {isChallengeVisible && <Challenge tag={challengeText} />}
            </div>
            <FullscreenModal open={modalOpen} onClose={handleCloseModal}>
                {challengeText}
            </FullscreenModal>
        </>
    )
}