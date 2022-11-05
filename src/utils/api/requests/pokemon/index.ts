import type { AxiosRequestConfig } from 'axios';

import { api } from '@utils/api/instance';

export interface RequestPokemonsParams {
  params: { limit?: number; offset?: number };
  config?: AxiosRequestConfig;
}

export const requestPokemons = ({ config, params }: RequestPokemonsParams) =>
  api.get<NamedAPIResourceList>('pokemon', { params, ...config });
