export interface Product {
    images: string[]
    ratingsQuantity: number
    _id: string
    title: string
    description: string
    quantity: number
    price: number
    imageCover: string
    category: Category
    ratingsAverage: number
    id: string
}

export interface Category {
    _id: string
    name: string
    image: string
}
