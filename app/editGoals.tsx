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
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGoalData } from "./store";

export default function EditGoal() {
  const router = useRouter();

  const goalData = useGoalData();

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

              <InputWBtns
                set={goalData.setSemester}
                value={goalData.semester}
              />
            </VStack>
          </Box>
          <Box flex={1}>
            <VStack mt="$2" space="xs">
              <Heading>Year Goal</Heading>
              <InputWBtns set={goalData.setYear} value={goalData.year} />
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}

function InputWBtns({
  set,
  value,
}: {
  set: (n: number) => void;
  value: number;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField
        fontSize={"$md"}
        value={value.toString()}
        onChange={(e) => {
          set(
            !!Number(e.nativeEvent.text)
              ? Number(e.nativeEvent.text)
              : e.nativeEvent.text == ""
              ? 0
              : value,
          );
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      >
        {!isFocused ? <Text> hours</Text> : undefined}
      </InputField>
      <VStack>
        <Pressable onPress={() => set(value + 1)}>
          <Box px="$4" borderWidth={"$1"} borderColor="$trueGray300">
            <Icon as={AddIcon} />
          </Box>
        </Pressable>
        <Pressable onPress={() => set(value - 1)}>
          <Box px="$4" borderWidth={"$1"} borderColor="$trueGray300">
            <Icon as={RemoveIcon} />
          </Box>
        </Pressable>
      </VStack>
    </Input>
  );
}
