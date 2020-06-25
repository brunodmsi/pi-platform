import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { Periods } from '../../pages/Main/index';
interface SidebarProps {
  periods: Periods[] | null;
}

const Sidebar: React.FC<SidebarProps> = ({ periods, ...rest }) => {
  const [list, setList] = useState(periods);

  useEffect(() => {
    setList(periods)
  }, [periods]);

  return (
    <Container>
      <header className="moreinfo">
        <h3>pi</h3>
        <p>2020</p>
      </header>

      <ul>
        {list && list.map(item => (
          <li><a href="">{item.name}</a></li>
        ))}
      </ul>

      <p  className="moreinfo">Desenvolvido por OMNI</p>
    </Container>
  )
}

export default Sidebar;
