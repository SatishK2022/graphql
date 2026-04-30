import User from "../models/user.model.js";


export async function getAllUsers() {
    const users = await User.find()
    return users;
}