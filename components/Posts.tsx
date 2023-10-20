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
import { Params } from "../params";
import { useMemo } from "react";
import { useApplications } from "../app/store";
export function Posts({ urgent: isUrgent }: { urgent: boolean }) {
  const apps = useApplications();
  const posts = useMemo(
    () => [
      {
        title: "Sunset Lane",
        time: 1,
        distance: 0.5,
        uri: "https://imagescdn.homes.com/i2/0mTZG77SlD9lbsEdBh6r_2HJa9ZdabEWoVfDd0nZVMc/117/image.jpg?p=1",
      },
      {
        title: "Robert C. Fistler",
        time: 2,
        distance: 1,
        urgent: "Now",
        uri: "https://lh3.googleusercontent.com/p/AF1QipMmDM0kNhN0J46it-mPOIsk0i2klMLMfoR1oDcc=s1360-w1360-h1020",
      },
      {
        title: "Food bank",
        time: 3,
        distance: 3,
        uri: "https://i0.wp.com/calmatters.org/wp-content/uploads/2022/06/060723-Food-Bank-SKN-CM_20.jpg?fit=1200%2C800&ssl=1",
      },
    ],
    [],
  );
  return (
    <ScrollView h={"88%"}>
      {posts
        .filter(({ urgent, title }) => {
          return (
            (isUrgent ? urgent : true) &&
            apps.applications.filter(
              (predicate) => predicate.info.title === title,
            ).length === 0
          );
        })
        .map(({ title, time, distance, uri, urgent }, k) => {
          return (
            <Post
              key={k}
              time={time}
              title={title}
              distance={distance}
              uri={uri}
              urgent={urgent}
            />
          );
        })}
    </ScrollView>
  );
}

export interface PostProps {
  title: string;
  time: number;
  distance: number;
  uri: string;
  urgent?: string;
  description?: string;
}
function Post({
  title,
  time,
  distance,
  uri,
  urgent,
  description = "Help needed",
}: PostProps) {
  const router = useRouter();
  const applicationState = useApplications();

  return (
    <Box mt="$2" py="$2" px="$2" borderRadius={"$lg"}>
      <VStack space="md">
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
        <Box p="$0.5">
          <VStack gap={"$0"}>
            <Heading underline fontSize={"$xl"} fontFamily="Montserrat-Medium">
              {title}
            </Heading>
            <Text fontSize={"$lg"}>{description}</Text>

            <VStack justifyContent="space-between">
              <Text
                fontSize={"$md"}
                color="$blueGray500"
                fontFamily="Montserrat-Medium"
              >
                {time} {time == 1 ? "Hour" : "Hours"} avaliable
              </Text>
              <Text
                fontSize={"$md"}
                color="$blueGray500"
                fontFamily="Montserrat-Medium"
              >
                {distance} {distance == 1 ? "Mile" : "Miles"} away
              </Text>
            </VStack>
          </VStack>
          <Button
            mt="$2"
            onPress={() => {
              router.push({
                pathname: "/moreInfo",
                params: {
                  title: title,
                  uri: uri,
                  timeNeeded: time,
                  distance,
                },
              });
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
        </Box>
      </VStack>
    </Box>
  );
}
