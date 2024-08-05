export interface Header {
    title: string,
    logo: string,
    city: string
}

export interface User {
    id: number,
    username: string,
    phone: string,
    avatar: string,
    description: string,
    documents: number
}

export interface Products {
    id: number,
    views: number,
    data: number,
    image: string,
    price: string,
    description: string,
    status: number
}

export interface Company {
    info: string,
    time: string,
    location: string
}
