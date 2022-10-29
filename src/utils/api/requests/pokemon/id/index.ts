import type { AxiosRequestConfig } from 'axios';

import { api } from '@utils/api/instance';

export interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemon = ({ config, params }: RequestPokemonParams) =>
  api.get<Pokemon>(`pokemon/${params.id}`, { ...config });
