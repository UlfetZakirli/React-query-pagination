import { ITEM_PER_PAGE } from "../utils/constants"

export const getProductList = async (page) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${ITEM_PER_PAGE}`)
    const totalData = res.headers.get('X-Total-Count')
    const data = await res.json()
    return {
        products: data,
        totalData 
    }

}