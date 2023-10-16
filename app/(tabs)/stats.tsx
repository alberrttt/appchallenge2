import { FontAwesome } from "@expo/vector-icons";
import {
  Box,
  Center,
  CloseIcon,
  EditIcon,
  HStack,
  Heading,
  Icon,
  Modal,
  ModalBackdrop,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Pressable,
  Progress,
  ProgressFilledTrack,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Stats() {
  return (
    <>
      <Stat />
    </>
  );
}

function Stat() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Box mt="$8" px="$4" flexDirection="column">
        <VStack>
          <Heading fontSize={"$5xl"} py="$4">
            Statistics
          </Heading>
          <Text>
            This is where your hours will be displayed. You can also see your
            progress towards your goal.
          </Text>

          <Box>
            <VStack gap={"$2"}>
              <VStack justifyContent="space-between" alignItems="flex-start">
                <Heading>Hours (Lifetime)</Heading>
                <Text fontSize={"$xl"}>6.0 Hours</Text>
              </VStack>

              <VStack justifyContent="space-between" alignItems="flex-start">
                <Heading>Hours (Semester)</Heading>
                <Text fontSize={"$xl"}>2.0 Hours</Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
        <VStack paddingTop={"$8"}>
          <Heading fontSize={"$5xl"} py="$4">
            Goals
          </Heading>
          <Text>
            You can use goals to keep track of hours that you need to do!
          </Text>

          <Box>
            <VStack gap={"$2"}>
              <VStack
                justifyContent="space-between"
                alignItems="flex-start"
                space="xs"
              >
                <Heading>Semester Goal</Heading>
                <Progress value={40}>
                  <ProgressFilledTrack />
                </Progress>
                <Text fontSize={"$xl"}>4 Hours / 5 Hours</Text>
              </VStack>
            </VStack>

            <VStack gap={"$2"} mt={"$4"}>
              <VStack
                justifyContent="space-between"
                alignItems="flex-start"
                space="xs"
              >
                <Heading>Year Goal</Heading>
                <Progress value={80}>
                  <ProgressFilledTrack />
                </Progress>
                <Text fontSize={"$xl"}>8 Hours / 10 Hours</Text>
              </VStack>
            </VStack>

            <Pressable
              mt={"$4"}
              onPress={() => {
                router.push("/editGoals");
              }}
            >
              <HStack alignItems="center" space="xs">
                <Text color="$blueGray700" underline>
                  Edit Goals
                </Text>
                <Icon as={EditIcon} color="$blueGray700" />
              </HStack>
            </Pressable>
          </Box>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
