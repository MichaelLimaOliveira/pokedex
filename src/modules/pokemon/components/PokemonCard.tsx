import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useQueryGetPokemonByName from "../../../shared/queries/getPokemonByName";
interface Props {
  name: string;
  image: string;
}
const PokemonCard = ({ name, image }: Props) => {
  const { data, isLoading, isError } = useQueryGetPokemonByName(name);

  const navigation = useNavigation();
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

    <TouchableOpacity
      style={{ flex: 1, marginVertical: 10, marginHorizontal: 5, height: 150 }}
      onPress={() => navigation.navigate("PokeDetails")}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#FFFFFF', '#c3c3c3']}
        style={{ borderRadius: 20, }}
      >
        <View
          style={styles.container}>
          <Text style={{ alignSelf: 'flex-end', color: '#666666' }}>999</Text>

          <Image
            source={{ uri: data.sprites.front_default }}
            height={80}
            width={80}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 12, color: '#1D1D1D', fontWeight: "400", lineHeight: 16 }}>{name}</Text>
        </View>
      </LinearGradient>


    </TouchableOpacity>


  )
}

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 16,
    height: 140,
    marginHorizontal: 5,
    padding: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
});

export default PokemonCard;

function getPokemonsImage() {
  throw new Error("Function not implemented.");
}
