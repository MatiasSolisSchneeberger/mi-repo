export interface concerts{
    "concerts": Array<concerts>
}

interface concerts{
    "fechas": Array<fechas>
    "lugar": Array<lugar>
    "telonero": string
}

interface fechas{
    "dia": string
    "mes": string
    "año": string
}

interface lugar{
    "pais": string
    "ciudad": string
    "estadio": string
}


