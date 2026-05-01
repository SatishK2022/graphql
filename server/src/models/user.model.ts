import { model, Schema } from "mongoose";

interface UserType {
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
    role: string;
    refreshToken?: string;
}

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    refreshToken: {
        type: String,
        index: true
    }
}, { timestamps: true });

const User = model("User", userSchema);

export type { UserType };
export default User;
