import { nanoid } from "nanoid";

interface IChallenge {
    id?: string;
    champion: string;
    specialty: string;
    winstreak?: number;
    activeChallenge?: boolean;
    challenger?: string;
}

export default class Challenge {
    id: string;
    champion: string;
    specialty: string;
    winstreak: number;
    activeChallenge: boolean;
    challenger?: string;
    constructor(challenge: IChallenge) {
        this.id = challenge.id || nanoid();
        this.champion = challenge.champion;
        this.specialty = challenge.specialty;
        this.winstreak = challenge.winstreak || 0;
        this.activeChallenge = challenge.activeChallenge || false;
        this.challenger = challenge.challenger || "";
    }
}
