import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '@utils/constants';

import styles from './header.module.css';

const IMG_LOGO_PATH =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png';

const Header: FC = () => (
    <div className={styles.header}>
      <NavLink to={ROUTES.POKEMONS}>
        <img className={styles.header_logo} src={IMG_LOGO_PATH} alt='logo' />
      </NavLink>

      <div>
        <NavLink to={ROUTES.POKEDEX} className={styles.header_link}>
          Pokedex
        </NavLink>
        <NavLink to={ROUTES.POKEMONS}>Pokemons</NavLink>
      </div>
    </div>
  );

export default Header;
