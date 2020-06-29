import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

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
          <Link
            activeClass="active"
            to={item._id}
            spy={true}
            smooth={true}
            duration={200}
          >
            <li key={item._id}>{item.name}</li>
          </Link>
        ))}
      </ul>

      <p  className="moreinfo">Desenvolvido por OMNI</p>
    </Container>
  )
}

export default Sidebar;
