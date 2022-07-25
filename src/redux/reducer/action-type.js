const initialState = { count: 0, products: [] };
const Change = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return { count: state.count + 1, products: state.products };
        case "DECREMENT": return { count: state.count - 1, products: state.products };
        case "INCREMENTCART": return cartItemValueChange(state, action);
        case "DECREMENTCART": return cartItemValueChange(state, action);
        case "ADD": return { count: 1, products: addThisProduct(state, action) };
        case "Remove": return removeProduct(state, action);
        default: return state;
    }
}
const cartItemValueChange = (state, action) => {
    if (action.type === "INCREMENTCART") {
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].id === action.product.id) {
                state.products[i].count = state.products[i].count + 1;
            }
        }
    } else {
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].id === action.product.id) {
                state.products[i].count = state.products[i].count - 1;
            }
        }
    }
    return { count: state.count, products: state.products };
}

const addThisProduct = (state, action) => {
    action.product.count = state.count;
    var isInArray = state.products.find(function (el) { return el.id === action.product.id }) !== undefined;
    if (!isInArray) {
        state.products.push(action.product);
    }
    console.log(state.products);
    localStorage.setItem("products", JSON.stringify(state.products))
    return state.products;
}
const removeProduct = (state, action) => {
    for (let i = 0; i < state.products.length; i++) {
        console.log(state.products[i].count);
        if (state.products[i].id === action.product.id) {
            state.products.splice(i, 1)
            break
        }
    }
    localStorage.setItem("products", JSON.stringify(state.products))
    return { count: state.count, products: state.products };
}
export default Change;