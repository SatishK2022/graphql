import Category from "../models/category.model.js";



export async function getAllCategories() {
    const categories = await Category.find()
    return categories;
}