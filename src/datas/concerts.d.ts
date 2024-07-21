export interface conciertos{
    "conciertos": Array<conciertos>
}

interface conciertos{
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


