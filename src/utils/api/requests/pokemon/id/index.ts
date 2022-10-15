import type { AxiosRequestConfig } from 'axios';

import { api } from '@utils/api/instance';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemon = ({ config, params }: RequestPokemonParams) =>
  api.get(`pokemon/${params.id}`, { ...config });
