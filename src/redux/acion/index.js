 export const incNumber = () => {
    return {
        type : "INCREMENT"
    }
}
export const decNumber = () => {
    return {
        type : "DECREMENT"
    }
}
export const addToCart = (product) => {
    return {
        type : "ADD",
        product: product
    }
}
export const incCart = (product) => {
    return {
        type : "INCREMENTCART",
        product: product
    }
}
export const decCart = (product) => {
    return {
        type : "DECREMENTCART",
        product: product
    }
}
export const Remove = (product) => {
    return {
        type : "Remove",
        product: product
    }
}