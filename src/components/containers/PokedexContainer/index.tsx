import { useState } from 'react';

import { useRequestPokemonQueries } from '@utils/api/hooks';

import styles from './pokedex.module.css';

const PokedexContainer = () => {
  const [offset, setOffset] = useState(10);
  const results = useRequestPokemonQueries({ offset });

  const isFetching = results.some((result) => result.isFetching);

  if (isFetching) return <>Error</>;

  const pokemons = results.map(({ data }) => data!.data);

  return (
    <div className={styles.pokedex_container}>
      <div className={styles.pokedex_container}>
        <div>card</div>
        <ul className={styles.list_container}>
          {pokemons.map(({ sprites, name }) => (
            <li key={name} className={styles.pokemon_item}>
              <img
                className={styles.pokemon_item_image}
                src={sprites.front_default ?? ''}
                alt='pokemon li'
              />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokedexContainer;
