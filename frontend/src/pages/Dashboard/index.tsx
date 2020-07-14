import React, { useCallback, useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Projects, AuthBox } from './styles';
import softImg from '../../assets/softamostra-curvas-03.svg';

interface ProjectVotes {
  _id?: string;
  title: string;
  totalVotes: Number;
  uniqueVotes: Number;
  views: Number;
}

const Dashboard: React.FC = () => {
  const [authKey, setAuthKey] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [projects, setProjects] = useState([] as ProjectVotes[]);
  const [filter, setFilter] = useState('');

  const handleAuthSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.get('/votes', {
        headers: {
          'X-API-KEY': authKey
        }
      });

      setErrorMessage('');
      setProjects(response.data.projects);
      setIsAuth(true);
    } catch(error) {
      setErrorMessage('Chave de acesso invalida')
    }
  }, [authKey])

  useEffect(() => {
    function compare(a: ProjectVotes, b: ProjectVotes) {
      let comparison = 0;
      const type = filter === 'total' ? 'totalVotes' : 'uniqueVotes';

      if (a[type] > b[type]) {
        comparison = 1;
      } else if (a[type] < b[type]) {
        comparison = -1;
      }

      return comparison;
    }

    const newProjects = projects.sort(compare);
    setProjects(newProjects);
  }, [filter, projects]);

  return (
    <Container>
      {isAuth ? (
        <>
          <header>
            <h1>Resultados SoftAmostra 2020</h1>

            <p>
              Visualização de todos os projetos presentes na SoftAmostra 2020.
              Verifique e organize os projetos do jeito que for mais conveniente.
              Quando clicado em um projeto, você verá mais informações sobre os projetos,
              assim como todos os email únicos usados para votar.
            </p>

            <h2>Organizar por</h2>
            <div>
              <label
                htmlFor="total"
                onClick={() => setFilter('total')}
              >
                <input
                  type="radio"
                  value="total"
                  checked={filter === 'total'}
                  onChange={e => setFilter(e.target.value)}
                />
                Votos totais
              </label>

              <label
                htmlFor="unique"
                onClick={() => setFilter('unique')}
              >
                <input
                  type="radio"
                  value="unique"
                  checked={filter === 'unique'}
                  onChange={e => setFilter(e.target.value)}
                />
                Votos únicos
              </label>
            </div>
          </header>

          <Projects>
            <section id="table-header">
              <p>Projeto</p>
              <p>Votos totais</p>
              <p>Votos únicos</p>
              <p>Visualizações</p>
            </section>

            {projects.map(project => (
              <section id="table-project" key={project._id}>
                <p>{project.title}</p>
                <p>{project.totalVotes}</p>
                <p>{project.uniqueVotes}</p>
                <p>{project.views}</p>
              </section>
            ))}
          </Projects>
        </>
      ): (
        <AuthBox>
          <img src={softImg} alt="SoftAmostra"/>
          <h2>RESULTADOS</h2>

          <form onSubmit={handleAuthSubmit}>
            <input
              type="password"
              placeholder="Chave de acesso"
              value={authKey}
              onChange={e => setAuthKey(e.target.value)}
            />

            <button type="submit">Enviar</button>
          </form>

          <span>{errorMessage}</span>
        </AuthBox>
      )}
    </Container>
  )
}

export default Dashboard;
