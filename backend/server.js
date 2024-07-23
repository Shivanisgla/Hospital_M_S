import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 4000; // Default to 4000 if PORT is not defined in .env

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
