import { ImageGalleryItem } from "components/GalleryItem/GalleryItem"
import { Gallery } from "./GalleryImg.styled"
export const ImageGallery = ({images}) => {
    
    return (<Gallery>
        {images.map(img => <ImageGalleryItem key={img.id} images={img} />)}
    </Gallery>)
}