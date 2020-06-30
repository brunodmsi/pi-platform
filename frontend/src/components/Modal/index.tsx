import React, { useState, useEffect, useRef } from 'react';
import ReactModal from 'react-modal';
import * as Yup from 'yup';
// import ReCaptcha, { ReCAPTCHAProps } from 'react-google-recaptcha';
import './styles.css';

import { Container, Votebox } from './styles';

import api from '../../services/api';

import { Project } from '../../pages/Main/index';
interface ModalProps {
  project: Project;
  isOpen: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, isOpen, close }) => {
  // const recaptchaRef = useRef<ReCaptcha>(null);
  const [email, setEmail] = useState('');
  useEffect(() => {
    ReactModal.setAppElement('body');
  }, [])

  function onChange(data: string | null) {
    console.log(data);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // const test = recaptchaRef.current?.getValue();
    // console.log(test);

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required()
      });
      console.log(email);

      await schema.validate({ email }, {
        abortEarly: false
      })

      await api.post('/votes', {
        email,
        projectId: project._id,
      });

      setEmail('');
      alert('Voto feito com sucesso!')
    } catch(err) {
      alert('E-mail incorreto, ou ocorreu um erro com o servidor. Tente novamente.')
    }
  }

  return (
    <>
      <ReactModal isOpen={isOpen} className="modal" overlayClassName="background">
        <Container>
          <header>
            {project.image ? <img src={project.image} alt={project.title}/> : <></>}
            <h1>{project.title}</h1>
          </header>

          <p>{project.description}</p>

          <a href={project.github}>{project.github}</a>

          <div>
            <iframe
              src={project.video}
              frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <Votebox>
              <h1>VOTE AQUI</h1>
              <p>Insira o seu e-mail para realizar a votacao desse projeto</p>
              <form onSubmit={handleSubmit}>
                {/* <ReCaptcha
                  ref={recaptchaRef}
                  sitekey="6LcLvKsZAAAAAKi4BGVQRZIY4ix-feTKB_2-RWuk"
                  onChange={onChange}
                /> */}

                <input
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                />
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
