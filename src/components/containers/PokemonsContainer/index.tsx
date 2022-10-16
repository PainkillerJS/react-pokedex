import type { FC } from 'react';
import { useRef, useState } from 'react';

import { useRequestPokemonQueries } from '@utils/api/hooks';
import { useIntersectionObserver } from '@utils/hooks';

import { PokemonSingle } from './components';

const PokemonsContainer: FC = () => {
  const lastElemRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(20);
  const results = useRequestPokemonQueries({ offset });

  const isFetching = results.some((result) => result.isFetching);

  const observerLoadData = () => setOffset(offset + 20);

  useIntersectionObserver({
    isLoadingRequest: isFetching,
    lastElementRef: lastElemRef,
    callBack: observerLoadData
  });

  if (isFetching) return <>Error</>;

  const pokemons = results.map(({ data }) => data!.data);

  return (
    <div className='container py-8 px-12'>
      <div className='grid grid-cols-4 gap-10'>
        {pokemons.map((pokemon, index) => (
          <PokemonSingle key={index} pokemon={pokemon} />
        ))}
      </div>
      <div ref={lastElemRef} className='opacity-0' />
    </div>
  );
};

export default PokemonsContainer;
