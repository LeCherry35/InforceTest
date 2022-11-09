export interface IProduct {
    id?: number
    imageUrl?: string
    count?: number
    name?: string
    size?: {
        width?: number
        height?: number
    }
    weight?: string
}