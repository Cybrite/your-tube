import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.API_SECRET,
});

const deleteAfterChange = async (publicID) => {
    try {
        if (!publicID) return null;

        const response = await cloudinary.uploader.destroy(publicID, {
            resource_type: "auto",
        });

        if (response.result === "not found") {
            console.log("file not found or already deleted");
            return null;
        }
        return response;
    } catch (error) {
        console.log("Error deleting image from cloudinary", error);
        throw error;
    }
};

export default deleteAfterChange;
