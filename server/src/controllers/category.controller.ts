import Category from "../models/category.model.js";



export async function getAllCategories() {
    const categories = await Category.find()
    return categories;
}

export async function getCategoryById(categoryId: string) {
    const category = await Category.findById(categoryId)
    return category;
}