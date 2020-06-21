import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Container, IntroductionContent } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <nav>
        <header className="moreinfo">
          <h3>pi</h3>
          <p>2020</p>
        </header>

        <ul>
          <li><a href="">Introducao</a></li>
          <li><a href="">1 periodo</a></li>
          <li><a href="">2 periodo</a></li>
          <li><a href="#">3 periodo</a></li>
        </ul>

        <p  className="moreinfo">Desenvolvido por OMNI</p>
      </nav>

      <main>
        <IntroductionContent>
          <p>Olá,</p>
          <p className="introduction-info">Nesta página você poderá votar nos projetos integrados de Ciência da Computação</p>
          <p className="introduction-info">Para saber mais sobre os projetos, clique em cima deles, e quando achar o que te chamou mais atenção, vote!</p>
          <p className="vote-text">A votação acaba em</p>
          <p className="vote-timer">1 dia, 5 horas e 32 minutos</p>
        </IntroductionContent>
      </main>
    </Container>
  )
}

export default Main;
