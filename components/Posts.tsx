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
export function Posts() {
  return (
    <VStack>
      <Post />
    </VStack>
  );
}

function Post() {
  return (
    <VStack>
      <Image
        borderRadius={"$xl"}
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
          <Heading underline fontSize={"$xl"}>
            Sunset Lane
          </Heading>
          <Text fontSize={"$xl"}>2 Hours{"\n"}2 Miles</Text>
        </VStack>
        <VStack>
          <Button backgroundColor="#03A9F4" borderRadius={"$lg"}>
            <Text color="white" fontSize={"$lg"} fontWeight="600" underline>
              Find Out More
            </Text>
          </Button>
          <Fab></Fab>
        </VStack>
      </HStack>
    </VStack>
  );
}
