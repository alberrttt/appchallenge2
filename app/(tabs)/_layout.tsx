import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { Box, Center, Text } from "@gluestack-ui/themed";
import Colors from "../../constants/Colors";
import { View } from "../../components/Themed";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarBackground: () => <View style={{ backgroundColor: "#1A91FF" }} />,
        tabBarStyle: {
          backgroundColor: "#1A91FF",
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Box />,
          tabBarLabel: () => {
            return <FontAwesome name="home" color={"white"} size={48} />;
          },
        }}
      />

      <Tabs.Screen
        name="applications"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Box />,
          tabBarLabel: () => {
            return <FontAwesome name="inbox" color={"white"} size={48} />;
          },
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Box />,
          tabBarLabel: () => {
            return <FontAwesome name="info" color={"white"} size={48} />;
          },
        }}
      />
    </Tabs>
  );
}
