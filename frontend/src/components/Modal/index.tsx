import React, { useRef, useEffect, useCallback } from 'react';
import ReactModal from 'react-modal';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import './styles.css';

import { Container, Votebox } from './styles';

import api from '../../services/api';

import { Project } from '../../pages/Main/index';
interface ModalProps {
  project: Project;
  isOpen: boolean;
  close: () => void;
}

interface FormProps {
  email: string;
}

const Modal: React.FC<ModalProps> = ({ project, isOpen, close }) => {
  useEffect(() => {
    ReactModal.setAppElement('body');
  }, [])

  const handleSubmit = useCallback(async (data: FormProps) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required()
      });

      await schema.validate(data, {
        abortEarly: false
      })

      await api.post('/votes', {
        email: data.email,
        projectId: project.id,
      });
    } catch(err) {
      alert('E-mail incorreto, ou ocorreu um erro com o servidor. Tente novamente.')
    }
  }, [])

  return (
    <>
      <ReactModal isOpen={isOpen} className="modal" overlayClassName="background">
        <Container>
          <header>
            <img src={project.image} alt={project.title}/>
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
              <Form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Seu e-mail"/>
                <button type="submit">VOTAR</button>
              </Form>
            </Votebox>
          </div>

          <button type="button" onClick={close}>X</button>
        </Container>
      </ReactModal>
    </>
  );
}

export default Modal;
