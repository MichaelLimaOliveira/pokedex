import { IPokemon } from "../../../shared/interfaces/IPokemon";
import { IPokemons } from "../../../shared/interfaces/IPokemons";
import PublicApi from "../../../shared/services/PublicApi";

export async function getPokemons(): Promise<IPokemons> {

  const res = await PublicApi.get(`pokemon`,);
  return res.data;
}

export async function getPokemonByName(name: string): Promise<IPokemon> {
  const res = await PublicApi.get(`pokemon/${name}`)
  return res.data
}

export async function getPokemonById(id: number): Promise<IPokemon> {
  const res = await PublicApi.get(`pokemon/${id}`)
  return res.data
}
