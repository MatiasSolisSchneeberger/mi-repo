export interface tarjetasCanciones {
    eras: Array<eras>
}

interface eras {
    "albums": string
    "logo": string
    "foto": string
    "emojie": string
    "fondo": string
    "disco": string
    "Spotify": string
    "anterior": string
    "siguiente": string
    "linkPage": string
    "canciones": Array<canciones>
    "extras": Array<extras>
    "notas": Array<notas>
}

interface canciones{
    title: string
    estado: string
    info: Array<info>
    cantado: boolean
    etiquetas: Array<etiquetas>
}
interface extras{
    title: string
    estado: string
    info: Array<info>
    cantado: boolean
    etiquetas: Array<etiquetas>
}

interface notas{
    nota: string
}

interface etiquetas{
    principal: string
    segundo: string
    tercero: string
    cuarto: string
    quinto: string
    sexto: string
}

interface info{
    tipo: number | null
    fecha: Array<fecha>
    cantSorp: string | null
    mashupCon: string | null
    instrumento: string | null
    lugar: string | null
}

interface fecha{
    dia: number | null
    mes: number | null
    año: number | null
}