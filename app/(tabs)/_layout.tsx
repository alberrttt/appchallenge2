import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";
import Colors from "../../constants/Colors";
import { View } from "../../components/Themed";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return (
		<FontAwesome
			size={28}
			style={{ marginBottom: -3 }}
			{...props}
		/>
	);
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			initialRouteName="index"
			screenOptions={{
				headerShown: false,
				tabBarBackground: () => {
					return <View style={{ backgroundColor: "#4AA9FF" }}></View>;
				},
			}
			}
		>
			<Tabs.Screen
				name="index"
				options={{
					href: null,
					tabBarLabel: () => {
						return <Text>Home</Text>;
					},
				}}
			/>
		</Tabs >
	);
}
