import type { FC } from 'react';
import { useCallback, useRef, useState } from 'react';

import PokemonInfo from '@containers/PokemonsContainer/components/PokemonInfo';
import { useRequestPokemonInfiniteQuery } from '@utils/api/hooks';
import { getPokemonId } from '@utils/helpers';
import { useIntersectionObserver } from '@utils/hooks';

import styles from './pokemon.module.css';

const PokemonsContainer: FC = () => {
  const lastElementRef = useRef<HTMLDivElement>(null);
  const [pokemonId, setPokemonId] = useState<Pokemon['id'] | null>(null);
  const { data, fetchNextPage, isLoading, isFetching } = useRequestPokemonInfiniteQuery();

  const nextPokemonsData = () => fetchNextPage();

  const handleMouseLeave = useCallback(() => setPokemonId(null), []);
  const handleMouseEnter = useCallback((id: Pokemon['id']) => setPokemonId(id), []);

  useIntersectionObserver({
    isLoadingRequest: isFetching,
    callBack: nextPokemonsData,
    lastElementRef
  });

  if (isLoading || !data) return <>Error</>;

  const pokemons = data.pages.reduce(
    (pokemons: NamedAPIResource[], { data }) => pokemons.concat(data.results),
    []
  );

  return (
    <div className='container py-8'>
      <div className={styles.pokemons_container}>
        {pokemons.map(({ name }, index) => {
          const id = index + 1;
          const isActiveCard = id === pokemonId;

          return (
            <PokemonInfo
              key={name}
              name={name}
              id={id}
              handleMouseLeave={handleMouseLeave}
              handleMouseEnter={handleMouseEnter}
              isActiveCard={isActiveCard}
            />
          );
        })}
      </div>
      <div className='opacity-0' ref={lastElementRef} />
    </div>
  );
};

export default PokemonsContainer;
