export type  Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
        back_default: string;
    };
    types: string[];
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    };
    evolutions: {
        from: number;
        to: number;
    };
}