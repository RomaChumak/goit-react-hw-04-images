import { useEffect } from "react";
import { Backdrop, ModalStyled } from "./Modal.styled";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector('#modal-root');

export const Modal = ( {onClose, images}) => {
    useEffect(() => {
        const handleCloseEsc = (evt) => {
            if (evt.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleCloseEsc);

        return () => { window.removeEventListener('keydown', handleCloseEsc) };
    }, [onClose]);




    
    const handleCloseClick = (evt) => {
        if (evt.target === evt.currentTarget) {
           onClose()
        }
    };

    const { largeImageURL, tags } = images
    
       return createPortal(<Backdrop onClick={handleCloseClick}>
            <ModalStyled>
                <img src={largeImageURL} alt={tags} />
            </ModalStyled>
       </Backdrop>,
           modalRoot
        )
    }
