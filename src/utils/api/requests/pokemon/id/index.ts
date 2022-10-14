import { api } from '@utils/api/instance';

import type { AxiosRequestConfig } from 'axios';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemon = ({ config, params }: RequestPokemonParams) =>
  api.get(`pokemon/${params.id}`, { ...config });
