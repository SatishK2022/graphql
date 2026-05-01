import { model, Schema } from "mongoose";

interface SizeType {
    id: string;
    size: string;
    stock: number;
}

interface ProductType {
    name: string;
    slug: string;
    description: string;
    images: string[];
    sizes: SizeType[];
    category: string;
    mrp: number;
    price: number;
    onSale: boolean;
    isFeatured: boolean;
    isWishlist: boolean;
}

const sizeSchema = new Schema({
    size: {
        type: String,
        required: true,
        uppercase: true
    },
    stock: {
        type: Number,
        default: 0
    }
});

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    images: [String],
    sizes: [sizeSchema],
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isWishlist: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Product = model("Product", productSchema);
export type { ProductType };
export default Product;
