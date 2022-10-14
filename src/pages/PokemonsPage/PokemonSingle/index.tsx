import type { FC } from 'react';

interface PokemonSingleProps {
  pokemon: any;
}

const PokemonSingle: FC<PokemonSingleProps> = ({ pokemon }) => {
  return (
    <div className='padding flex flex-col justify-center rounded p-4 shadow'>
      <img alt='pokemon image' className='w-full' src={pokemon.sprites.front_default} />
      <h2 className='w-full text-center text-2xl font-semibold capitalize'>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonSingle;
