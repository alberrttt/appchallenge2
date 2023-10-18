import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, Tabs, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import Login from "./login";
import {
  Box,
  Button,
  GluestackUIProvider,
  StatusBar,
  StyledProvider,
  createConfig,
  Text,
} from "@gluestack-ui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLoginStore } from "./store";
import { config } from "../gluestack-ui.config";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "login",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loading, setLoading] = useState(0);
  if (!setLoading) {
    return <SplashScreen />;
  }
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Lato: require("../assets/fonts/Lato400-Reg.ttf"),
    Inter: require("../assets/fonts/Inter.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}
import { Image } from "@gluestack-ui/themed";
import { createProvider } from "@gluestack-ui/provider";
import TabLayout from "./(tabs)/_layout";
import { BlurView } from "expo-blur";
const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = "CustomProvider";
function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const LoginState = useLoginStore((state) => state);
  const router = useRouter();

  return (
    <Provider config={config}>
      <StatusBar />

      <Stack
        screenOptions={{
          headerShown: false,
          headerTitle: undefined,
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen
          name="modal"
          options={{ headerShown: false, header: undefined }}
        />
        <Stack.Screen name="editGoals" />
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, header: undefined }}
        />
        <Stack.Screen name="moreInfo" />
      </Stack>
    </Provider>
  );
}
