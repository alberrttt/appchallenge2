import {
  Box,
  EditIcon,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useApplications } from "../store";
import { useState } from "react";
import { getHoursAndMinutesFromFractionalHour } from "../../hours";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function () {
  const apps = useApplications();
  const router = useRouter();
  return (
    <>
      <VStack p={"$8"} px={"$4"} mt="$10">
        {apps.applications.length >= 1 ? (
          apps.applications.map((app, key) => {
            return (
              <Box
                key={key}
                backgroundColor="$trueGray300"
                p="$2"
                borderRadius="$md"
                mt="$4"
              >
                <HStack justifyContent="space-between">
                  <Heading fontSize={"$2xl"}>{app.info.title}</Heading>
                  <Pressable
                    onPress={() => {
                      router.push({
                        pathname: "/editVolunteerHours",
                        params: {
                          ...app.info,
                          amountTime: app.amountTime,
                          key: key,
                        },
                      });
                    }}
                  >
                    <EditIcon />
                  </Pressable>
                </HStack>
                <Box>
                  <Text fontSize="$xl">
                    <Text bold fontSize="$xl">
                      Hours Applied:
                    </Text>
                    {`${(() => {
                      const { hours, minutes } =
                        getHoursAndMinutesFromFractionalHour(app.amountTime);
                      return `${hours > 0 ? `${hours} hours` : ""} ${
                        minutes > 0 ? `${minutes} minutes` : ""
                      }`;
                    })()}`}
                  </Text>
                </Box>
              </Box>
            );
          })
        ) : (
          <Text>Nothing here! Apply to some places.</Text>
        )}
      </VStack>
    </>
  );
}
