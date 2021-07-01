export interface ProductItem {
    id: string
    title: string
    description: string
    price: number
    imageUrl: string
    added?: boolean
}

export interface Data {
    username: string
    email: string
    address: string
}

export interface OrderObjType {
    username: string
    email: string
    address: string
    total: number,
    cartItems: ProductItem[],
    id: string,
    createdAt: string,
    updatedAt: string,
}


export interface CartState {
    cartItems: ProductItem[]
}

export interface OrderType {
    username: string
    email: string
    address: string
    cartItems: ProductItem[]
    total: number
    id: string
    createdAt: string
    updatedAt: string
}