import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../../shared/themes/styles";

const Home = () => {

  const uri = "https://thenounproject.com/api/private/icons/40583/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"

  const navigation = useNavigation();
  return (
    <View style={{ padding: 20, backgroundColor: theme.colors.primary, flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri }} width={60} height={60} tintColor={"white"} />
        <Text style={{ fontSize: 24, color: theme.colors.text }}>Pokedex</Text>
      </View>

      <View style={{ backgroundColor: theme.colors.text, flex: 1, borderRadius: 18 }}>
        <View style={{ flex: 1, padding: 10, gap: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Pokemon");
            }}
          >
            <View style={{ height: 80, width: 160, backgroundColor: 'blue', justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
              <Text>Pokemons</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ height: 80, width: 160, backgroundColor: 'blue', justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
              <Text>Frutas</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

export default Home;