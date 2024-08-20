export interface setlist {
    'setlist': Array<setlist>
}

interface setlist{
    parte: string
    set: Array<set>
}

interface set{
    era: string
    disco: string
    canciones: Array<canciones>
}

interface canciones{
    canción: string
    nota: string
}
