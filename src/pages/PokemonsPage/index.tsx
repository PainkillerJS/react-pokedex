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
    <div>
      <button onClick={() => fetchNextPage()}>+ 10</button>
    </div>
  );
};

export default PokemonsPage;
