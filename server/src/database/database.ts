import mongoose from "mongoose";

async function connectToDB() {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI!, { dbName: "sowhat"});

        console.log("✅ Database Connected Successfully", connection.name)
    } catch (error) {
        console.error("❌ Database Connection Failed: ", error)
    }
}

export default connectToDB;