import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.API_SECRET,
});

const deleteAfterChange = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.destroy(localFilePath, {
            resource_type: "auto",
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export default deleteAfterChange;
