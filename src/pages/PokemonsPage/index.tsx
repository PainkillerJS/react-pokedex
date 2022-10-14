import { useState } from 'react';

import { useRequestPokemonInfiniteQuery } from '@utils/api/hooks';

import type { FC } from 'react';

const PokemonsPage: FC = () => {
  const { isFetching, data, fetchNextPage, isError } = useRequestPokemonInfiniteQuery();

  if (isError || !data) return <div>Error</div>;
  if (isFetching) {
    return <div>Loading ...</div>;
  }

  const pokemons = data.pages.reduce(
    (pokemons, page) => [...pokemons, ...(page.data.results as [])],
    []
  );

  return (
    <div className='container'>
      <div className='grid grid-cols-3 gap-3'>
        {pokemons.map((pokemon: any) => (
          <div key={pokemon.name} className='flex justify-center rounded p-4 shadow'>
            <h2 className='w-full text-center text-sm font-semibold capitalize'>{pokemon.name}</h2>
          </div>
        ))}
        <button onClick={() => fetchNextPage()}>+ 10</button>
      </div>
    </div>
  );
};

export default PokemonsPage;
