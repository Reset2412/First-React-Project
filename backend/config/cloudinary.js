import {v2 as cloudinary} from "cloudinary"

const connectClaudinary = async ()=>{

    cloudinary.config({
        cloud_name: process.env.CLAUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })

}

export default connectClaudinary;