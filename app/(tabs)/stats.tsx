import { Box, Center, HStack, Heading, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Stats() {
  return (
    <SafeAreaView>
      <Box mt="$8" px="$4" flexDirection="column">
        <Heading fontSize={"$5xl"} py="$4">
          Statistics
        </Heading>
        <Text>
          This is where your hours will be displayed. You can also see your
          progress towards your goal.
        </Text>

        <Center>
          <HStack justifyContent="space-between" alignItems="center">
            <Heading>Hours</Heading>
            <Text>2.0 Hours</Text>
          </HStack>
        </Center>
      </Box>
    </SafeAreaView>
  );
}
