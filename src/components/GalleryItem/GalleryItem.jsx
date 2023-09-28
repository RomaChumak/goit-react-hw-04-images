import { Component } from "react"
import { GalleryItem, GalleryImg } from "./GalleryItem.styled"
import { Modal } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
    state = {
        show: false
    }

    openCloseModal = () => {
        this.setState(pState => ({show: !pState.show}))
    }
    render() {
        const openModal = this.openCloseModal;
        const images = this.props.images;
        const { show } = this.state;
    show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
        return (
            <>
                <GalleryItem onClick={openModal}>
            <GalleryImg src={images.webformatURL} alt={images.tags} />
        </GalleryItem>
                {show && <Modal onClose={openModal} images={images}/>}
            </>
        )
}}