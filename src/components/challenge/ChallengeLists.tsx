import './Challenge.css'
import { ReactNode } from "react";

export const musikk_challenges: ReactNode[] = [
    <h4>Denne gruppen står bak sanger som 'Heaven takes you home' og 'Don´t you worry child'</h4>,
    <h4>Slottsfjellsfestivalen skjer i denne byen</h4>,
    <h4>Dette er den mest streama sangen i 2024</h4>,
    <h4>Denne norske artisten har vært flest ganger på Billboard top 100</h4>,
];

export const sport_challenges: ReactNode[] = [
    <h4>Dette er den mestvinnende kvinnelige tennisspilleren noensinne</h4>,
    <h4>Denne nordmannen har totalt flest VM-gull av alle i Norge</h4>,
    <h4>Dette er verdens mest sette sportsarrangement</h4>,
    <h4>Hvor mange sporter har NTNUI? (+-5)</h4>,
];

export const kultur_challenges: ReactNode[] = [
    <h4>Denne ungdomspolitikeren har fått hets etter å ha sagt at unge gutter ikke får nok sex</h4>,
    <h4>Timothée Chalamet spiller Paul Atreides i denne filmserien</h4>,
    <h4>Hvor mange studenter er det på Dronning Mauds (DMMH)? (+-100)</h4>,
    <h4>Dette produktet økte med 3% i pris i henhold til statsbudsjettet i 2025</h4>,
];

export const mysterie_challenges: ReactNode[] = [
    <h4>Gi et eksempel på italian brainrot</h4>,
    <h4>Dette skandinaviske landet har minst gjennomsnittlig penislengde</h4>,
    <button onClick={() => { window.open('/GuessWho', '_blank') }} className="new-page-button">
        Gjett hvem!
    </button>,
    <h4>Denne kroppsdelen er oppkalt etter den tyske legen Ernst Grafenberg</h4>
];

export const alko_challenges: ReactNode[] = [
    <h4>Denne drinken består hovedsakelig av mynte, lime, boblevann og sukkersirup</h4>,
    <h4>Dette er den mest drukkete pilsen i Norge</h4>,
    <h4>Gin er basert på denne spriten</h4>,
    <h4>Dette er Norges nordligste bryggeri</h4>,
];