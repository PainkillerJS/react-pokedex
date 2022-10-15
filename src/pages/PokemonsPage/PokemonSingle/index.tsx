import type { FC } from 'react';

import styles from './pokemon.module.css';

interface PokemonSingleProps {
  pokemon: any;
}







const PokemonSingle: FC<PokemonSingleProps> = ({ pokemon }) => (
    <div className={styles.pokemonContainer}>
      <img alt='pokemon' className='w-full' src={pokemon.sprites.front_default} />
      <h2 className='w-full text-center text-2xl font-semibold capitalize'>{pokemon.name}</h2>
    </div>
  );

export default PokemonSingle;
