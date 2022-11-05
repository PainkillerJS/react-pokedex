import type { FC } from 'react';

import { useRequestPokemonInfiniteQuery } from '@utils/api/hooks';
import { getPokemonId } from '@utils/helpers';

import styles from './pokemon.module.css';

const PokemonsContainer: FC = () => {
  const { data, fetchNextPage, isLoading } = useRequestPokemonInfiniteQuery();

  if (isLoading || !data) return <>Error</>;

  const pokemons = data.pages.reduce(
    (pokemons: NamedAPIResource[], { data }) => pokemons.concat(data.results),
    []
  );

  return (
    <div className='container py-8'>
      <div className={styles.pokemons_container}>
        {pokemons.map((pokemon, index) => (
          <div key={pokemon.name} className={styles.pokemon}>
            <div className={styles.pokemon_number}>{getPokemonId(index + 1)}</div>
            <p className={styles.pokemon_name}>{pokemon.name}</p>
          </div>
        ))}
      </div>
      <button onClick={() => fetchNextPage()}>+</button>
    </div>
  );
};

export default PokemonsContainer;
