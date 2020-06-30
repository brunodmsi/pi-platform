import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

import { Container, IntroductionContent, Continue, Period, Cards, Card } from './styles';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';

import api from '../../services/api';

import paraticImg from '../../assets/paratic2.png';
import omniImg from '../../assets/omni-07.png';
import softImg from '../../assets/softamostra-curvas-03.svg';

export interface Project {
  _id: string;
  image: string;
  title: string;
  description: string;
  participants: string;
  github: string;
  trello: string;
  video: string;
}

export interface Periods {
  _id: string;
  name: string;
  description: string;
  projects: Array<Project>;
}

const Main: React.FC = () => {
  const [modalOpen, setModalOpen] = useState('');
  const [periods, setPeriods] = useState<Periods[] | null>(null);

  useEffect(() => {
    api.get('/periods').then(({ data }) => {
      setPeriods(data);
    })
  }, []);

  function getTimeRemaining() {
    const endtime = '2020-07-20T02:59:59Z';
    const total = Date.parse(endtime) - Date.parse(new Date().toISOString());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return (
      <p className="vote-timer">{days} dias, {hours} horas e {minutes} minutos</p>
    )
  }

  function openModal(_id: string) {
    api.post(`/projects/click/${_id}`);

    setModalOpen(_id);
  }

  function closeModal() {
    setModalOpen('none');
  }

  return (
    <Container>
      <Sidebar periods={periods} />

      <main>
        <IntroductionContent>
          <img src={softImg} alt="" className="introduction-img"/>
          {/* <h1 className="introduction-name">Portal de projetos</h1> */}

          <p className="introduction-info">
            O portal SoftAmostra reúne uma Amostra Digital dos projetos tecnológicos dos graduandos do 3º, 5º e 7º
            períodos do curso de Bacharelado em Ciência da Computação do CESUPA.
          </p>
          <p className="introduction-info blue"><strong>Ajude-nos a escolher os melhores projetos!</strong></p>
          <p className="introduction-info">Para isso, basta selecionar o período da turma e votar na melhor proposta para o mercado.</p>

          <p>Apoio:</p>
          <section>
            <a href="http://www.paratic.com.br/"><img src={paraticImg} alt="PARATIC"/></a>
            <a href="https://omnicesupa.com"><img src={omniImg} alt="OMNI"/></a>
          </section>

          <p className="vote-text">A votação acaba em</p>
          <p className="vote-timer">{getTimeRemaining()}</p>
        </IntroductionContent>

        <Continue>
          <Link
            to={periods ? periods[0]._id : 'null'}
            smooth={true}
          >
            <p>Clique aqui para continuar</p>
            <FaArrowDown size={20} />
          </Link>
        </Continue>

        {periods?.map(period => (
          <Period id={period._id}>
            <h3>{period.name}</h3>
            <p>{period.description}</p>

            <Cards>
              {period.projects.map(project => (
                <React.Fragment key={project._id}>
                  <Card onClick={() => openModal(project._id)}>
                    <header>
                      {project.image ? <img src={project.image} alt={project.title}/> : <></>}
                      <h1>{project.title}</h1>
                    </header>

                    <p>{project.description.slice(0, 220).concat('...')} </p>
                  </Card>

                  <Modal project={project} isOpen={modalOpen === project._id} close={closeModal} />
                </React.Fragment>
              ))}
            </Cards>
          </Period>
        ))}
      </main>
    </Container>
  )
}

export default Main;
