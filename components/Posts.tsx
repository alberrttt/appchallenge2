import {
  Box,
  styled,
  Image,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  FabLabel,
  Fab,
} from "@gluestack-ui/themed";
import { useNavigation, useRouter } from "expo-router";
export function Posts() {
  return (
    <VStack>
      <Post />
    </VStack>
  );
}

function Post() {
const router = useRouter();
  return (
    <VStack>
      <Image
        borderRadius={8}
        source={{
          uri: "https://imagescdn.homes.com/i2/0mTZG77SlD9lbsEdBh6r_2HJa9ZdabEWoVfDd0nZVMc/117/image.jpg?p=1",
        }}
        w={"100%"}
        h={"75%"}
        alignSelf="center"
        alt={"school"}
      />
      <HStack justifyContent="space-between" py="$2">
        <VStack gap={"$0"}>
          <Heading underline fontSize={"$2xl"} fontFamily="Montserrat-Medium">
            Sunset Lane
          </Heading>
          <Text fontSize={"$xl"} fontFamily="Montserrat-Medium">2 Hours{"\n"}2 Miles</Text>
        </VStack>
        <VStack>
          <Button onPress={() => {
router.push("/moreInfo")
}} backgroundColor="#03A9F4" borderRadius={"$lg"}>
            <Text color="white" fontSize={"$lg"} fontWeight="600" underline>
              Find Out More
            </Text>
          </Button>
          <Box backgroundColor="$red500" p="$2" mt="$1" borderRadius={"$lg"}>
            <Text
              color="$white"
              fontFamily="Montserrat-Medium"
            >
              URGENT: > 2 HOURS
            </Text>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
}
