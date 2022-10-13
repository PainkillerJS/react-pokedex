import { api } from '@utils/api/instance';

import type { AxiosRequestConfig } from 'axios';

interface RequestPokemonParams {
  params: { limit: number; offset: number };
  config?: AxiosRequestConfig;
}

export const requestPokemon = ({ config, params }: RequestPokemonParams) =>
  api.get('pokemon', { ...config, params });
