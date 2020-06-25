import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';

import { Container, IntroductionContent, Continue, Period, Cards, Card } from './styles';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';

import api from '../../services/api';

export interface Project {
  image: string;
  title: string;
  description: string;
  participants: string;
  github: string;
  trello: string;
  video: string;
}

export interface Periods {
  name: string;
  description: string;
  projects: Array<Project>;
}

const Main: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [periods, setPeriods] = useState<Periods[] | null>([]);

  useEffect(() => {
    api.get('/periods').then(({ data }) => {
      setPeriods(data);
    })
  }, []);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Container>
      <Sidebar periods={periods} />

      <main>
        <IntroductionContent>
          <p>Olá,</p>
          <p className="introduction-info">Nesta página você poderá votar nos projetos integrados de Ciência da Computação</p>
          <p className="introduction-info">Para saber mais sobre os projetos, clique em cima deles, e quando achar o que te chamou mais atenção, vote!</p>
          <p className="vote-text">A votação acaba em</p>
          <p className="vote-timer">1 dia, 5 horas e 32 minutos</p>
        </IntroductionContent>

        <Continue>
          <div>
            <p>Clique aqui para continuar</p>
            <FaArrowDown size={20} />
          </div>
        </Continue>

        {periods?.map(period => (
          <Period>
            <h3>{period.name}</h3>
            <p>{period.description}</p>

            <Cards>
              {period.projects.map(project => (
                <>
                  <Card onClick={openModal}>
                    <header>
                      <img src={project.image} alt={project.title}/>
                      <h1>{project.title}</h1>
                    </header>

                    <p>{project.description}</p>

                    <span>{project.participants}</span>
                  </Card>

                  <Modal project={project} isOpen={modalOpen} close={closeModal} />
                </>
              ))}
            </Cards>
          </Period>
        ))}
      </main>
    </Container>
  )
}

export default Main;
