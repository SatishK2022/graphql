
export const schema = `#graphql
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        role: String!
        createdAt: String!
        updatedAt: String!
        refreshToken: String
    }

    type Size {
        id: ID!
        size: String!
        stock: Int
    }

    type Category {
        id: ID!
        name: String!
        slug: String!
        description: String
        isActive: Boolean
        createdAt: String
        updatedAt: String
    }

    type Product {
        id: ID!
        name: String!
        slug: String!
        description: String!
        images: [String]
        sizes: [Size]
        category: Category!
        mrp: Float!
        price: Float!
        onSale: Boolean
        isFeatured: Boolean
        isWishlist: Boolean
        isActive: Boolean
        createdAt: String
        updatedAt: String
    }


    type Query {
        users: [User],
        products: [Product],
        categories: [Category]
    }
`;