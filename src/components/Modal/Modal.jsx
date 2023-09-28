import { Component } from "react";
import { Backdrop, ModalStyled } from "./Modal.styled";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEsc)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseEsc)
    }

    handleCloseEsc = (evt) => {
        if (evt.code === 'Escape') {
            this.props.onClose()
        }
    };
    
    handleCloseClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.props.onClose()
        }
    };
    render() {
        const {largeImageURL, tags} = this.props.images
       return createPortal(<Backdrop onClick={this.handleCloseClick}>
            <ModalStyled>
                <img src={largeImageURL} alt={tags} />
            </ModalStyled>
       </Backdrop>,
           modalRoot
        )
    }
}