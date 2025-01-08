import cloudinary from "../lib/cloudinary.js";

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "barber_shop_images" }, (error, result) => {
        if (error) {
          reject("Cloudinary upload failed");
        } else {
          resolve(result.secure_url);
        }
      })
      .end(fileBuffer);
  });
};
export { uploadToCloudinary };
