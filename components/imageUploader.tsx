import { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState("");

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  }

  return (
    <div>
      <input type="file" name="myImage" onChange={onImageChange} />
      <img src={image} />
    </div>
  )
}

export default ImageUploader;
