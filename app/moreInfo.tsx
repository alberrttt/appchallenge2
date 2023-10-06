import {
  Box,
  Button,
  Heading,
  VStack,
  Text,
  ArrowLeftIcon,
  HStack,
  Image
} from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { Button as DefaultButton } from "@gluestack-ui/themed";
import { Pressable } from "react-native";
function InfoUnit({ title, body }: { body: string, title: string }) {
  return <VStack>
    <Text fontWeight="$extrabold" fontSize={"$lg"} color="$trueGray900">
      {title}
    </Text>

    <Text fontSize={"$xl"} color="$trueGray600">
      {body}
    </Text>
  </VStack>
}
export default function MoreInfo() {
  const router = useRouter();
  return (
    <Box mt={"$10"}>
      <VStack p="$4" alignItems="flex-start" gap={"$2"} >
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <HStack alignItems="center">
            <ArrowLeftIcon />
            <Text >Go back</Text>
          </HStack>
        </Pressable>

        <Image
          borderRadius={8}
          source={{
            uri: "https://imagescdn.homes.com/i2/0mTZG77SlD9lbsEdBh6r_2HJa9ZdabEWoVfDd0nZVMc/117/image.jpg?p=1",
          }}
          maxWidth={'$full'}
          w="$full"
          aspectRatio={"1"}
          alignSelf="center"
          alt={"school"}
        />
        <VStack>
          <Heading fontSize={"$3xl"} mt="$2">Sunset Lane</Heading>
          <Text color="$coolGray500" fontSize={"$lg"}>
            Help needed
          </Text>

        </VStack>
        <VStack gap={"$2"}>

          <HStack gap={"$2"} justifyContent="space-between" maxWidth={'$full'} mt={"$2"}>

            <InfoUnit title="Hours avaliable" body="10 hours" />
          </HStack>

          <HStack w="100%" justifyContent="space-between" space="md">

            <VStack>
              <Text fontWeight="$extrabold">
                Time
              </Text>

              <Text flexWrap="wrap" fontSize={"$xl"}>
                3:00 P.M.
              </Text>
            </VStack>
          </HStack>
          <Box>
            <Text fontWeight="$extrabold">
              Hours avaliable
            </Text>

            <Text fontSize={"$xl"}>
              10 hours
            </Text>
          </Box>
        </VStack>
        <Button backgroundColor={"$primary400"} alignSelf="center" m="$2" w="100%" mt={"$4"}>
          <Text color="$white">
            Apply
          </Text>
        </Button>
      </VStack>
    </Box >
  );
}
