import type { FC } from 'react';
import { useState } from 'react';

import { useRequestPokemonQueries } from '@utils/api/hooks';

import { PokemonSingle } from './components';

const PokemonsContainer: FC = () => {
  const [offset, setOffset] = useState(0);

  const results = useRequestPokemonQueries({
    params: { offset, limit: 20 }
  });

  const isLoading = results.some((result) => result.isLoading);

  const observerLoadData = () => setOffset(offset + 20);

  if (isLoading) return <>Error</>;

  const pokemons = results.map(({ data }) => data!.data);

  return (
    <div className='container py-8 px-12'>
      <div className='grid grid-cols-4 gap-10'>
        {pokemons.map((pokemon, index) => (
          <PokemonSingle key={index} pokemon={pokemon} />
        ))}
      </div>
      <button onClick={observerLoadData}>+</button>
    </div>
  );
};

export default PokemonsContainer;
