export interface Product {
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string
}

export interface Card {
    data:{
        id:number,
        title:string,
        price:number,
        category:string,
        description:string,
        image:string
    },
    quantity?:number
}
