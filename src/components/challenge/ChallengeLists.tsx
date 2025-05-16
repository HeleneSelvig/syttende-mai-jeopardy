import { useNavigate } from 'react-router-dom';
import './Challenge.css'
import { ReactNode } from "react";

function GuessWhoButton() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/GuessWho")} className="new-page-button">
            Gjett hvem!
        </button>
    );
}

export const musikk_challenges: ReactNode[] = [
    <h3>Denne gruppen står bak sanger som 'Heaven takes you home' og 'Don´t you worry child'</h3>,
    <h3>Slottsfjellsfestivalen skjer i denne byen</h3>,
    <h3>Dette er den mest streama sangen i 2024</h3>,
    <h3>Denne norske artisten har vært flest ganger på Billboard top 100</h3>,
];

export const sport_challenges: ReactNode[] = [
    <h3>Dette er den mestvinnende kvinnelige tennisspilleren noensinne</h3>,
    <h3>Denne nordmannen har totalt flest VM-gull av alle i Norge</h3>,
    <h3>Dette er verdens mest sette sportsarrangement</h3>,
    <h3>Hvor mange sporter har NTNUI? (+-5)</h3>,
];

export const kultur_challenges: ReactNode[] = [
    <h3>Denne ungdomspolitikeren har fått hets etter å ha sagt at unge gutter ikke får nok sex</h3>,
    <h3>Timothée Chalamet spiller Paul Atreides i denne filmserien</h3>,
    <h3>Hvor mange studenter er det på Dronning Mauds (DMMH)? (+-100)</h3>,
    <h3>Dette produktet økte med 3% i pris i henhold til statsbudsjettet i 2025</h3>,
];

export const mysterie_challenges: ReactNode[] = [
    <h3>Gi et eksempel på italian brainrot</h3>,
    <h3>Dette skandinaviske landet har minst gjennomsnittlig penislengde</h3>,
    <GuessWhoButton />,
    <h3>Denne kroppsdelen er oppkalt etter den tyske legen Ernst Grafenberg</h3>
];

export const alko_challenges: ReactNode[] = [
    <h3>Denne drinken består hovedsakelig av mynte, lime, boblevann og sukkersirup</h3>,
    <h3>Dette er den mest drukkete pilsen i Norge</h3>,
    <h3>Gin er basert på denne spriten</h3>,
    <h3>Dette er Norges nordligste bryggeri</h3>,
];