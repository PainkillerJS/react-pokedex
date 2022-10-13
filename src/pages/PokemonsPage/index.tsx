import { useState } from 'react';

import { useRequestPokemonQuery } from '@utils/api/hooks';

const PokemonsPage = () => {
  const [offset, setOffset] = useState(0);

  const { isLoading, data } = useRequestPokemonQuery({ offset });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default PokemonsPage;
