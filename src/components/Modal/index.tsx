import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import './styles.css';

import { Container, Votebox } from './styles';

import { Project } from '../../pages/Main/index';
interface ModalProps {
  project: Project;
  isOpen: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, isOpen, close }) => {
  return (
    <>
      <ReactModal isOpen={isOpen} className="modal" overlayClassName="background">
        <Container>

          <header>
            <img src={project.image_url} alt={project.title}/>
            <h1>{project.title}</h1>
          </header>

          <p>{project.description}</p>

          <span>{project.participants}</span>
          <a href={project.github}>{project.github}</a>
          <a href={project.trello}>{project.trello}</a>

          <div>
            <iframe
              width="600"
              height="300"
              src={project.video}
              frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <Votebox>
              <h1>VOTE AQUI</h1>
              <p>Insira o seu e-mail para realizar a votacao desse projeto</p>
              <form>
                <input type="text" placeholder="Seu e-mail"/>
                <button type="submit">VOTAR</button>
              </form>
            </Votebox>
          </div>

          <button type="button" onClick={close}>X</button>
        </Container>
      </ReactModal>
    </>
  );
}

export default Modal;
