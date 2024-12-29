import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";
import imageCompression from 'browser-image-compression';
import axios from "axios";

export const uploadImageToCloudinary = async (imageFile) => {
    const formData = new FormData();

    let fileToUpload = imageFile;


    // Compress the image
    fileToUpload = await imageCompression(imageFile, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
    });


    formData.append("file", fileToUpload);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);

    const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`;

    try {
        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.secure_url;
    } catch (error) {
        console.error("Upload failed:", error);
        throw new Error("File upload failed");
    }
};

export const addProduct = async (productData) => {
    try {
        await addDoc(collection(db, "products"), productData);
    } catch (error) {
        console.error("Error adding product to Firestore:", error);
        throw new Error("Failed to add product to Firestore");
    }
};
