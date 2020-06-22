import React, { useRef, useCallback, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

import { Container, IntroductionContent, Continue, Period, Cards, Card } from './styles';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';

export interface Project {
  image_url: string;
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
  const [modalOpen, setModalOpen] = useState(true);
  const [periods, setPeriods] = useState<Periods[] | null>([
    {
      name: '3 periodo',
      description: 'Marketing Digital',
      projects: [
        {
          image_url: 'https://camo.githubusercontent.com/3d158b667fb02c1984b3351797cec153df225944/68747470733a2f2f692e696d6775722e636f6d2f766334437965692e706e67',
          title: 'Scient',
          description: 'Uma descricao breve, porem sucinta do que o projeto pretende fazer ou resolver',
          participants: 'Bruno De Masi, Joao Tome, Lucas Vieira  akjhdsjkadskjhajhkdajhkdsakhjsd',
          github: 'https://github.com/brunodmsi/scient',
          trello: 'https://trello.com',
          video: 'https://www.youtube.com/embed/95cLaX7YBdM'
        },
      ]
    },
    {
      name: '5 periodo',
      description: 'Marketing Digital',
      projects: [
        {
          image_url: 'https://camo.githubusercontent.com/3d158b667fb02c1984b3351797cec153df225944/68747470733a2f2f692e696d6775722e636f6d2f766334437965692e706e67',
          title: 'Scient',
          description: 'Uma descricao breve, porem sucinta do que o projeto pretende fazer ou resolver',
          participants: 'Bruno De Masi, Joao Tome, Lucas Vieira  akjhdsjkadskjhajhkdajhkdsakhjsd',
          github: 'https://github.com/brunodmsi/scient',
          trello: 'https://trello.com',
          video: 'https://www.youtube.com/embed/95cLaX7YBdM'
        },
      ]
    },
    {
      name: '7 periodo',
      description: 'Marketing Digital',
      projects: [
        {
          image_url: 'https://camo.githubusercontent.com/3d158b667fb02c1984b3351797cec153df225944/68747470733a2f2f692e696d6775722e636f6d2f766334437965692e706e67',
          title: 'Scient',
          description: 'Uma descricao breve, porem sucinta do que o projeto pretende fazer ou resolver',
          participants: 'Bruno De Masi, Joao Tome, Lucas Vieira  akjhdsjkadskjhajhkdajhkdsakhjsd',
          github: 'https://github.com/brunodmsi/scient',
          trello: 'https://trello.com',
          video: 'https://www.youtube.com/embed/95cLaX7YBdM'
        },
      ]
    }
  ])

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
                      <img src={project.image_url} alt={project.title}/>
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
