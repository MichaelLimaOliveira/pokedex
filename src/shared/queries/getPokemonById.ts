
import { useQuery } from '@tanstack/react-query';
import { getPokemonById } from '../../modules/pokemon/services/pokemon.service';


export default function useQueryGetPokemonById(id: number) {
  return useQuery({
    queryKey: ['pokemon-id', id],
    queryFn: () => getPokemonById(id),
  });
}