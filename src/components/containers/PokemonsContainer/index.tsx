import type { FC } from 'react';
import { useCallback, useRef, useState } from 'react';

import PokemonInfo from '@containers/PokemonsContainer/components/PokemonInfo';
import { useRequestPokemonInfiniteQuery } from '@utils/api/hooks';
import { useDebounce, useIntersectionObserver } from '@utils/hooks';

import styles from './pokemon.module.css';

const REQUEST_POKEMONS_DATA = 20;

const PokemonsContainer: FC = () => {
  const lastElementRef = useRef<HTMLDivElement>(null);
  const [pokemonId, setPokemonId] = useState<Pokemon['id'] | null>(1);

  const { data, fetchNextPage, isLoading, isFetching, hasNextPage } =
    useRequestPokemonInfiniteQuery({
      limit: REQUEST_POKEMONS_DATA
    });
  const debouncePokemonId = useDebounce(pokemonId, 300);

  const pokemons = data?.pages.reduce(
    (pokemons: NamedAPIResource[], { data }) => pokemons.concat(data.results),
    []
  );

  const nextPokemonsData = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const handleMouseLeave = useCallback(() => setPokemonId(null), []);
  const handleMouseEnter = useCallback((id: Pokemon['id']) => setPokemonId(id), []);

  useIntersectionObserver({
    isLoadingRequest: isFetching,
    callBack: nextPokemonsData,
    lastElementRef
  });

  return (
    <div>
      {isLoading ? (
        <>Error</>
      ) : (
        <>
          <div className={styles.pokemons_container}>
            {pokemons?.map(({ name, url }) => {
              const id = Number(url.split('/').at(-2));
              const isActiveCard = id === debouncePokemonId;

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
        </>
      )}
    </div>
  );
};

export default PokemonsContainer;
