import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView as AndroidSafeAreaView
} from "react-native-safe-area-context";
import AppNavigation from "./src/shared/navigation/AppNavigation";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <NavigationContainer>
        <AndroidSafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor='transparent' />
          <AppNavigation />
        </AndroidSafeAreaView >
      </NavigationContainer>
    </QueryClientProvider>
  );
}

