import { getAllCategories, getCategoryById } from "../../controllers/category.controller.js";
import { getAllProducts, getProduct } from "../../controllers/product.controller.js";
import { getAllUsers } from "../../controllers/user.controller.js";
import { ProductType } from "../../models/product.model.js";
import User, { UserType } from "../../models/user.model.js";


export const graphqlResolvers = {
    Mutation: {
      createUser: async (_: any, { firstName, email, password }: UserType) => {
        return await User.create({ firstName, email, password });
      }
    },
    Query: {
      users: getAllUsers,
      products: getAllProducts,
      categories: getAllCategories,
      product: getProduct
    },
    Product: {
      category: async (product: ProductType) => await getCategoryById(product.category)
    }
  }