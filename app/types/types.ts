// Global types, interfaces, enums

export interface Book {
    id: number
    , title: string
    , cover_artist: string
    , cover_image: string
    , series: number
    , world: number
    , amazon_link: string
    , publish_date: Date | string
    , synopsis: string
    , on_sale: boolean
    , audio_book: boolean
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
    , date_started: Date | string
}