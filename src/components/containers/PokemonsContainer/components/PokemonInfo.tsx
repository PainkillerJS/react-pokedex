import type { FC } from 'react';
import { memo } from 'react';

import { getPokemonId } from '@utils/helpers';

import styles from '@containers/PokemonsContainer/pokemon.module.css';

interface PokemonInfoProps extends Pick<Pokemon, 'name'> {
  id: number;
  handleMouseLeave: () => void;
  handleMouseEnter: (id: Pokemon['id']) => void;
  isActiveCard: boolean;
}

const PokemonInfo: FC<PokemonInfoProps> = memo(
  ({ name, id, handleMouseLeave, handleMouseEnter, isActiveCard }) => (
    <div
      className={styles.pokemon_number}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.pokemon}>
        <p className={styles.pokemon_name}>{name}</p>
        <div className={styles.pokemon_number}>{getPokemonId(id)}</div>
      </div>
      {isActiveCard && <div className={styles.pokemon_info}>123</div>}
    </div>
  )
);

export default PokemonInfo;
