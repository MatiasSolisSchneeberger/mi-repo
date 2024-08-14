export interface concerts {
    "erasOutfit": Array<era>;
}

interface era {
    'discos': string;
    'bodysuit': Array<info>; 
    'dress': Array<info>; 
    'jacket': Array<info>; 
    'shirt': Array<info>; 
    'set': Array<info>;
}

interface info {
    description: string;
    image: string;
}



