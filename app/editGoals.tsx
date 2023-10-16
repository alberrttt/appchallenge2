import {
  ArrowLeftIcon,
  HStack,
  Heading,
  Icon,
  Pressable,
  VStack,
  Text,
  Input,
  InputField,
  Box,
  Button,
  AddIcon,
  RemoveIcon,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditGoal() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <VStack p="$4">
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <HStack alignItems="center">
            <Icon as={ArrowLeftIcon} />
            <Text>Go back</Text>
          </HStack>
        </Pressable>
        <Heading pt={"$2"} mt={"$4"} fontSize={"$3xl"}>
          Edit Goals
        </Heading>
        <HStack space="md" justifyContent="space-between">
          <Box flex={1}>
            <VStack mt="$2" space="xs">
              <Heading>Semester Goal</Heading>

              <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField value="4" placeholder="Enter Goal Here" />
              </Input>
            </VStack>
          </Box>
          <Box flex={1}>
            <VStack mt="$2" space="xs">
              <Heading>Year Goal</Heading>

              <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField fontSize={"$md"} value="8" />
                <VStack>
                  <Button backgroundColor="$coolGray50">
                    <Icon as={RemoveIcon} />
                  </Button>
                  
                  <Button backgroundColor="$coolGray50">
                    <Icon as={AddIcon} />
                  </Button>
                </VStack>
              </Input>
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
