import { Component } from 'react';
import { Overlay, ModalStyled } from './Modal.styled';
export class Modal extends Component {
  render() {
    const {
      closeModal,
      image: { src, alt },
    } = this.props;
    return (
      <Overlay>
        <ModalStyled>
          <img src={`https://www.themoviedb.org/t/p/w500/${src}`} alt={alt} />
          <button onClick={closeModal}>Close Modal</button>
        </ModalStyled>
      </Overlay>
    );
  }
}
