import { FlatList, Image, Text, View } from "react-native";
import useQueryGetPokemonById from "../../../shared/queries/getPokemonById";
import PokemonType from "./PokemonType";

const PokemonDetails = () => {

  const { data, isLoading, isError } = useQueryGetPokemonById(1)

  if (isLoading) {
    return <Text>Carregando....</Text>
  }

  if (isError) {
    return <Text>Error</Text>
  }

  if (!data) {
    return <Text>Vazio</Text>
  }

  return (
    <View style={{
      paddingHorizontal: 8,
      flex: 1,
      backgroundColor: 'red'
    }}>
      <View style={{ height: 180, backgroundColor: 'red' }}>
        <Image source={{ uri: data.sprites.front_default }} height={200} />
      </View>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 20
      }}>
        <View style={{ alignItems: 'center' }}>

          <FlatList
            data={data.types}
            horizontal={true}
            renderItem={({ item }) => (
              <PokemonType type={item.type.name} />
            )
            }
          />
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 16 }}>
          <Text style={{ color: 'red', fontSize: 14, fontWeight: '700', fontStyle: 'normal', lineHeight: 16 }}>About</Text>
        </View>

        <View style={{ backgroundColor: "blue", borderColor: 'red', borderWidth: 1, paddingBottom: 16, height: 48 }}>
          <View>
            <Text>6,9kg</Text>
            <Text>weight</Text>
          </View>
          <View>
            <Text>0,7m</Text>
            <Text>height</Text>
          </View>
          <View>
            <Text>Chorofill</Text>
            <Text>overfowf</Text>
            <Text>moves</Text>
          </View>

        </View>

        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error beatae accusamus itaque velit sapiente natus quo, cumque ea provident aut amet nisi, ratione nobis alias mollitia sed deleniti praesentium perspiciatis
          </Text>
        </View>

        <View>
          <Text>
            Base Status
          </Text>
        </View>

      </View>

    </View >
  );
}


export default PokemonDetails;