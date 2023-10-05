import { Box, Button, Heading, VStack, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
export default function MoreInfo() {
  const router = useRouter();
  return (
    <Box>
      <SafeAreaView>
        <VStack p="$8">
          <Button
            p="$0"
            backgroundColor="transparent"
            onPress={() => {
              router.back();
            }}
          >
            <Text>Go back</Text>
          </Button>
          <Heading>Hello</Heading>
        </VStack>
      </SafeAreaView>
    </Box>
  );
}
