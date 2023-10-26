import TypeGrass from "../../../shared/assets/pokemonTypes/Type=Grass.svg";
import TypePoison from "../../../shared/assets/pokemonTypes/Type=Poison.svg";

export enum PokemonTypeEnum {
  type = 'type',
  grass = 'grass',
  poison = 'poison',
  normal = 'normal',
  fighting = 'fighting',
  flying = 'flying',
  ground = 'ground',
  rock = 'rock',
  bug = 'bug',
  ghost = 'ghost',
  steel = 'steel',
  fire = 'fire',
  water = 'water',
  electric = 'electric',
  psychic = 'electric',
  ice = 'ice',
  dragon = 'dragon',
  dark = 'dark',
  fairy = 'fairy'
}

type Props = {
  type: string
}

const PokemonType = ({ type }: Props) => {
  if (type === PokemonTypeEnum.grass) {
    return (
      <TypeGrass />
    )
  }

  if (type === PokemonTypeEnum.poison) {
    return (
      <TypePoison />
    )
  }

  return (
    <></>
  )


}

export default PokemonType;