import { useRequestPokemonQuery } from '@utils/api/hooks';

import type { FC } from 'react';

interface PokemonSingleProps {
  id: number;
}

const PokemonSingle: FC<PokemonSingleProps> = ({ id }) => {
  const { isFetching, data, isError } = useRequestPokemonQuery({ id });

  if (isError || !data) return <div>Error</div>;
  if (isFetching) {
    return <div>Loading ...</div>;
  }

  const pokemon = data.data;

  return (
    <div>
      <img alt='' src='' />
      <div key={pokemon.name} className='flex justify-center rounded p-4 shadow'>
        <h2 className='w-full text-center text-sm font-semibold capitalize'>{pokemon.name}</h2>
      </div>
    </div>
  );
};

export default PokemonSingle;
