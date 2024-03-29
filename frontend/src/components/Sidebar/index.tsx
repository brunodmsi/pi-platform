import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import { Container } from './styles';

import softImg from '../../assets/softbranco.png';
import cesupaImg from '../../assets/CESUPA-04.png';

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
        <img src={softImg} alt="SoftAmostra"/>
      </header>

      <ul>
        {list && list.map(item => (
          <Link
            activeClass="active"
            to={item._id}
            spy={true}
            smooth={true}
            duration={200}
            key={item._id}
          >
            <li key={item._id}>{item.name}</li>
          </Link>
        ))}
      </ul>

      <img src={cesupaImg} alt="CESUPA" className="cesupa-logo-nav" />
    </Container>
  )
}

export default Sidebar;
