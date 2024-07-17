export interface tarjetasCanciones {
    eras: Array<eras>
}

interface eras {
    "nombre": string
    "logo": string
    "foto": string
    "emojie": string
    "fondo": string
    "disco": string
    "Spotify": string
    "masInfo": string
    "canciones": Array<canciones>
}

interface canciones{
    title: string
    fechas: Array<fechas>
    cantado: boolean
    etiquetas: Array<etiquetas>
}

interface etiquetas{
    principal: string
    segundo: string
    tercero: string
    cuarto: string
    quinto: string
    sexto: string
}

interface fechas{
    tipo: string
    dia: string
    mes: string
    año: string
}