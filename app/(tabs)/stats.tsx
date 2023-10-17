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
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGoalData } from "../store";

export default function Stats() {
  return (
    <>
      <Stat />
    </>
  );
}

function Stat() {
  const router = useRouter();
  const goals = useGoalData();
  return (
    <ScrollView>
      <SafeAreaView>
        <Box mt="$8" px="$4" flexDirection="column">
          <VStack>
            <Heading fontSize={"$5xl"} pt="$4">
              Statistics
            </Heading>
            <Text>
              This is where your hours will be displayed. You can also see your
              progress towards your goal.
            </Text>

            <Box
              pt="$2"
              backgroundColor="$trueGray200"
              p="$4"
              borderRadius="$xl"
              mt="$4"
            >
              <VStack gap={"$2"}>
                <VStack justifyContent="space-between" alignItems="flex-start">
                  <Heading>Lifetime</Heading>
                  <Text fontSize={"$xl"}>10.0 Hours</Text>
                </VStack>
                <VStack justifyContent="space-between" alignItems="flex-start">
                  <Heading>Yearly</Heading>
                  <Text fontSize={"$xl"}>8.0 Hours</Text>
                </VStack>
                <VStack justifyContent="space-between" alignItems="flex-start">
                  <Heading>Semester</Heading>
                  <Text fontSize={"$xl"}>4.0 Hours</Text>
                </VStack>
              </VStack>
            </Box>
          </VStack>
          <VStack paddingTop={"$8"}>
            <Heading fontSize={"$5xl"} pt="$4">
              Goals
            </Heading>
            <Text>
              You can use goals to keep track of hours that you need to do!
            </Text>

            <Box
              pt="$2"
              backgroundColor="$trueGray200"
              p="$4"
              borderRadius="$xl"
              mt="$4"
            >
              <VStack gap={"$2"}>
                <VStack
                  justifyContent="space-between"
                  alignItems="flex-start"
                  space="xs"
                >
                  <Heading>Semester Goal</Heading>
                  <Progress value={(4 / goals.semester) * 100} h={"$6"}>
                    <ProgressFilledTrack h="100%" />
                    <Text alignSelf="center" color="$white" position="absolute">
                      {Math.floor((4 / goals.semester) * 100)}%
                    </Text>
                  </Progress>
                  <Text fontSize={"$xl"}>4 Hours / {goals.semester} Hours</Text>
                </VStack>
              </VStack>

              <VStack gap={"$2"} mt={"$4"}>
                <VStack
                  justifyContent="space-between"
                  alignItems="flex-start"
                  space="xs"
                >
                  <Heading>Year Goal</Heading>
                  <Progress value={(8 / goals.year) * 100} h={"$6"}>
                    <ProgressFilledTrack h="100%" />
                    <Text alignSelf="center" color="$white" position="absolute">
                      {Math.floor((8 / goals.year) * 100)}%
                    </Text>
                  </Progress>
                  <Text fontSize={"$xl"}>8 Hours / {goals.year} Hours</Text>
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
    </ScrollView>
  );
}
