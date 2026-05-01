import Product from "../models/product.model.js";


export async function getAllProducts() {
    const products = await Product.find()
    return products;
}

export async function getProduct(parent: any, args: { id: string }) {
    const product = await Product.findById(args.id)
    return product;
}