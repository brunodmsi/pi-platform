import React, { useCallback, useState, useEffect } from 'react';

import { Container, Projects } from './styles';

interface ProjectVotes {
  _id?: string;
  name: string;
  totalVotes: Number;
  uniqueVotes: Number;
  views: Number;
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Scient',
      totalVotes: 22,
      uniqueVotes: 20,
      views: 78
    },{
      name: 'Scient',
      totalVotes: 20,
      uniqueVotes: 18,
      views: 78
    },
    {
      name: 'Scient',
      totalVotes: 25,
      uniqueVotes: 18,
      views: 78
    },{
      name: 'Scient',
      totalVotes: 37,
      uniqueVotes: 25,
      views: 78
    }
  ]);
  const [filter, setFilter] = useState('');

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
  }, [filter]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {

  }, [])

  return (
    <Container>
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
          <section id="table-project">
            <p>{project.name}</p>
            <p>{project.totalVotes}</p>
            <p>{project.uniqueVotes}</p>
            <p>{project.views}</p>
          </section>
        ))}
      </Projects>
    </Container>
  )
}

export default Dashboard;
