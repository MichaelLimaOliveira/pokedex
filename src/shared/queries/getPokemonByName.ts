
import { useQuery } from '@tanstack/react-query';
import { getPokemonByName } from '../../modules/pokemon/services/pokemon.service';


export default function useQueryGetPokemonByName(name: string) {
  return useQuery({
    queryKey: ['pokemon-name', name],
    queryFn: () => getPokemonByName(name),
  });
}
