import { useState } from "react"
import { GalleryItem, GalleryImg } from "./GalleryItem.styled"
import { Modal } from "components/Modal/Modal";

export const ImageGalleryItem = ({images}) => {
    const [show, setShow] = useState(false)
    
    const openCloseModal = () => {
        setShow(!show);
    }
    
    show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
        return (
            <>
                <GalleryItem onClick={openCloseModal}>
            <GalleryImg src={images.webformatURL} alt={images.tags} />
        </GalleryItem>
                {show && <Modal onClose={openCloseModal} images={images}/>}
            </>
        )
}