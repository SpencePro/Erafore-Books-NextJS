// Global types, interfaces, enums

export interface Book {
    id: number
    , title: string
    , coverArtist: string
    , coverImage: string
    , series: number
    , world: number
    , amazonLink: string
    , publishDate: Date | string
    , synopsis: string
    , onSale: boolean
    , audioBook: boolean
}

export interface World {
    id: number
    , name: string
    , description: string
}

export interface Series {
    id: number
    , name: string
    , description: string
    , world: number
    , dateStarted: Date | string
}