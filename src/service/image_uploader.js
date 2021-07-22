class ImageUploader {
   async upload(file) {
 const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'jidxt1gq');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dhhthzgi6/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
    }
}

export default ImageUploader;