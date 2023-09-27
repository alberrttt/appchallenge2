import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import Login from "./login";
import {
	Box,
	GluestackUIProvider,
	StatusBar,
	StyledProvider,
	createConfig,
} from "@gluestack-ui/themed";
import {
	SafeAreaProvider,
	SafeAreaView,
} from "react-native-safe-area-context";
import { useLoginStore } from "./store";
import { config } from "../gluestack-ui.config";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		Lato: require("../assets/fonts/Lato400-Reg.ttf"),
		Inter: require("../assets/fonts/Inter.ttf"),
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
import { createProvider } from "@gluestack-ui/provider";
const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = "CustomProvider";
function RootLayoutNav() {
	const colorScheme = useColorScheme();
	const LoginState = useLoginStore((state) => state);

	return (
		<Provider config={config}>
			<StatusBar />

			<SafeAreaProvider>
				<SafeAreaView>
					<Box width={"100%"}>
						<Login />
					</Box>
				</SafeAreaView>
			</SafeAreaProvider>
		</Provider>
	);
}
