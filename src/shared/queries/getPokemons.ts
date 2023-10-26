
import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../../modules/pokemon/services/pokemon.service';



export default function useQueryGetPokemons() {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(),
  });
}
