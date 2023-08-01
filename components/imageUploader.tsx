import { useRef, useState } from 'react'
import { Button, Image, FormControl, FormLabel } from "@chakra-ui/react"

function ImageUploader() {
  const [image, setImage] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(URL.createObjectURL(img))
    }
  }

  const onImageRemove = () => {
    setImage("")
    if (fileInputRef.current) {
      fileInputRef.current.value=""
    }
  }

  return (
    <FormControl>
      <FormLabel>画像</FormLabel>
      <input type="file" onChange={onImageChange} ref={fileInputRef} />
      {image && <Image src={image} />}
      {image && <Button onClick={onImageRemove}>Remove image</Button>}
    </FormControl>
  )
}

export default ImageUploader
