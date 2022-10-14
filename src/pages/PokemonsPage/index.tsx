import { useState } from 'react';

import PokemonSingle from './PokemonSingle';

import type { FC } from 'react';

const PokemonsPage: FC = () => {
  const [pokemons, setPokemons] = useState(Array.from({ length: 20 }));

  return (
    <div className='container'>
      <div className='grid grid-cols-3 gap-3'>
        {pokemons.map((_, index) => (
          <PokemonSingle key={index} id={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default PokemonsPage;
