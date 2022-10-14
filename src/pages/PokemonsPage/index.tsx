import { useRequestPokemonQueries } from '@utils/api/hooks';

import PokemonSingle from './PokemonSingle';

import type { FC } from 'react';

const PokemonsPage: FC = () => {
  const results = useRequestPokemonQueries({ offset: 20 });

  const isLoading = results.some((result) => result.isLoading);

  if (isLoading) return <></>;

  const pokemons = results.map((result: any) => result.data.data);

  return (
    <div className='container'>
      <div className='grid grid-cols-3 gap-3'>
        {pokemons.map((pokemon, index) => (
          <PokemonSingle key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonsPage;
