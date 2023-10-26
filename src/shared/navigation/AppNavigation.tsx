import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../modules/home/screens";
import PokemonDetails from "../../modules/pokemon/components/PokemonDetails";
import Pokemon from "../../modules/pokemon/screens";
import { theme } from "../themes/styles";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name="Pokemon"
        component={Pokemon}
        options={{ headerStyle: { backgroundColor: theme.colors.primary }, headerTitle: 'Pokedex', headerTintColor: theme.colors.text, headerTitleAlign: 'center' }}
      />
      <Screen
        name="PokeDetails"
        component={PokemonDetails}
        options={{ headerStyle: { backgroundColor: theme.colors.primary }, headerTitle: 'Pokedex', headerTintColor: theme.colors.text, headerTitleAlign: 'center' }}
      />
    </Navigator>
  );
}

export default AppNavigation;