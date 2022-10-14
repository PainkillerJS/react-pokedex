import type { FC } from 'react';

interface PokemonSingleProps {
  pokemon: any;
}

const PokemonSingle: FC<PokemonSingleProps> = ({ pokemon }) => {
  return (
    <div className='flex justify-center rounded p-4 shadow'>
      <img alt='pokemon image' src={pokemon.sprites.front_default} />
      <h2 className='w-full text-center text-sm font-semibold capitalize'>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonSingle;
