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
  ScrollView,
} from "@gluestack-ui/themed";
import { useNavigation, useRouter } from "expo-router";
export function Posts() {
  return (
    <ScrollView h={"88%"} >
      <Post
        title="Sunset Lane"
        time="1 Hours"
        distance="0.5 Miles"
        uri="https://imagescdn.homes.com/i2/0mTZG77SlD9lbsEdBh6r_2HJa9ZdabEWoVfDd0nZVMc/117/image.jpg?p=1"
      />
      <Post
        title="Robert C. Fistler"
        time="2 Hours"
        distance="1 Mile"
        urgent="Now"
        uri="https://lh3.googleusercontent.com/p/AF1QipMmDM0kNhN0J46it-mPOIsk0i2klMLMfoR1oDcc=s1360-w1360-h1020"
      />
      <Post
        title="Food bank"
        time="3 Hours"
        distance="3 Miles"
        uri="https://i0.wp.com/calmatters.org/wp-content/uploads/2022/06/060723-Food-Bank-SKN-CM_20.jpg?fit=1200%2C800&ssl=1"
      />
    </ScrollView>
  );
}

function Post({ title, time, distance, uri, urgent }: Record<string, string>) {
  const router = useRouter();
  return (
    <Box>
      <Image
        borderRadius={8}
        source={{
          uri: uri,
        }}
        w={"100%"}
        h={"$96"}
        alignSelf="center"
        alt={"school"}
      />
      <HStack justifyContent="space-between" py="$2">
        <VStack gap={"$0"}>
          <Heading underline fontSize={"$xl"} fontFamily="Montserrat-Medium">
            {title}
          </Heading>
          <Text fontSize={"$xl"} fontFamily="Montserrat-Medium">
            {time}
            {"\n"}
            {distance}
          </Text>
        </VStack>
        <VStack>
          <Button
            onPress={() => {
              router.push("/moreInfo");
            }}
            backgroundColor="#03A9F4"
            borderRadius={"$lg"}
          >
            <Text color="white" fontSize={"$lg"} fontWeight="600" underline>
              Find Out More
            </Text>
          </Button>

          {urgent !== undefined ? (
            <Box backgroundColor="$red500" p="$2" mt="$1" borderRadius={"$lg"}>
              <Text
                color="$white"
                fontFamily="Montserrat-Medium"
                textAlign="center"
                fontSize={"$md"}
              >
                Urgent: {urgent}
              </Text>
            </Box>
          ) : (
            ""
          )}
        </VStack>
      </HStack>
    </Box>
  );
}
