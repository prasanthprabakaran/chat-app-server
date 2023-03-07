import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((res) =>
        console.log(`MongoDB is Connected: ${res.connection.host}`)
        ).catch((err) => console.log(err));
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit();
    }
};

export default connectDB;