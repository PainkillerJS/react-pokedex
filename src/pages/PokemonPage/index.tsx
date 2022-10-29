import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useRequestPokemonQuery } from '@utils/api/hooks';

const PokemonPage: FC = () => {
  const params = useParams();

  const { data } = useRequestPokemonQuery({ params: { id: Number(params.pokemonId) }, config: {} });
  return <div>{data?.data.name}</div>;
};

export default PokemonPage;
