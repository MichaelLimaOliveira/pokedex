import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { FlatList, Text, View } from "react-native";
import { TextField } from "../../../shared/TextField";
import useQueryGetPokemons from "../../../shared/queries/getPokemons";
import { theme } from "../../../shared/themes/styles";
import PokemonCard from "../components/PokemonCard";
import { FilterButton } from "./styles";


const Pokemon = () => {
  const uri = "https://thenounproject.com/api/private/icons/40583/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0";

  const navigation = useNavigation();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const { data, isLoading, isError } = useQueryGetPokemons();


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
    <View style={{ padding: 5, backgroundColor: theme.colors.primary, flex: 1, gap: 10 }}>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <TextField
          control={control}
          placeholder="Pesquisar"
          name="search"
          iconName="magnify"
        />

        <FilterButton>
          <Ionicons name="options" size={22} color={theme.colors.primary} />
        </FilterButton>


      </View>
      <View style={{ backgroundColor: theme.colors.text, flex: 1, borderRadius: 18 }}>

        <FlatList
          data={data.results}
          showsVerticalScrollIndicator={false}
          style={{ padding: 10, }}
          numColumns={2}
          renderItem={({ item }) => (
            <PokemonCard
              name={item.name}
              image={item.name}
            />
          )}

        />
      </View >
    </View >
  )
}

export default Pokemon;