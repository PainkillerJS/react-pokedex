import classNames from 'classnames';
import type { KeyboardEvent } from 'react';
import { useState } from 'react';

import { useRequestPokemonQueries } from '@utils/api/hooks';

import styles from './pokedex.module.css';

const PokedexContainer = () => {
  const [offset, setOffset] = useState(5);
  const [activePokemonId, setActivePokemonId] = useState<Pokemon['id']>(1);

  const results = useRequestPokemonQueries({ offset });

  const isFetching = results.some((result) => result.isFetching);

  if (isFetching) return <>Error</>;

  const handleSelectPokemon = (id: Pokemon['id']) => () => setActivePokemonId(id);
  const handleKeyboardSelectPokemon =
    (id: Pokemon['id']) => (event: KeyboardEvent<HTMLLIElement>) =>
      event.key === 'Enter' && setActivePokemonId(id);

  const pokemons = results.map(({ data }) => data!.data);
  const activePokemon = pokemons.find(({ id }) => id === activePokemonId)!;

  return (
    <div className={styles.pokedex}>
      <div className={styles.card}>
        <div className={styles.card_title}>
          <h3 className={styles.card_title_name}>{activePokemon.name}</h3>
          <h3>#00{activePokemon.id}</h3>
        </div>

        <div className={styles.card_types}>
          {activePokemon.types.map(({ type }) => (
            <div className={styles.card_type} key={type.name}>
              {type.name}
            </div>
          ))}
        </div>

        <div>
          <img src={activePokemon.sprites.front_default ?? ''} alt='pokemon active' />
        </div>

        <div className={styles.card_info}>
          <div>
            <h4 className={styles.card_info_title}>Stats</h4>
            <ul>
              {activePokemon.stats.map(({ stat, base_stat }) => (
                <li key={stat.name} className={styles.card_info_item}>
                  <p>
                    {stat.name}: {base_stat}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.card_info_title}>Abilities</h4>
            <ul>
              {activePokemon.abilities.map(({ ability }) => (
                <li key={ability.name} className={styles.card_info_item}>
                  {ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ul className={styles.list}>
        {pokemons.map(({ sprites, name, id }) => {
          const isActive = activePokemonId === id;

          return (
            <li
              key={name}
              role='option'
              aria-selected={isActive}
              tabIndex={0}
              onKeyPress={handleKeyboardSelectPokemon(id)}
              className={classNames(styles.pokemon_item, {
                [styles.pokemon_item_active]: isActive
              })}
              onClick={handleSelectPokemon(id)}
            >
              <img
                className={styles.pokemon_item_image}
                src={sprites.front_default ?? ''}
                alt='pokemon li'
              />
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokedexContainer;
