import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

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
        {/* <h3>SoftAmostra</h3> */}
        {/* <p>SoftAmostra</p> */}
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
