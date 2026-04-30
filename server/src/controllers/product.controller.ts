import Product from "../models/product.model.js";


export async function getAllProducts() {
    const products = await Product.find()
    return products;
}