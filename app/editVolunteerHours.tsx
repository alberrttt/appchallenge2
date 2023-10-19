import {
  ArrowLeftIcon,
  HStack,
  Pressable,
  Text,
  Box,
  Heading,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  ButtonText,
  Image,
} from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { getHoursAndMinutesFromFractionalHour } from "../hours";
import { useApplications } from "./store";

export default function EditVolunteerHours() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [state, setState] = useState(0);
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    setState(Number(params.amountTime));
    setSlider((Number(params.amountTime) * 100) / Number(params.timeNeeded));
  }, []);
  const { hours, minutes } = useMemo(
    () =>
      getHoursAndMinutesFromFractionalHour(
        (slider / 100) * Number(params.timeNeeded),
      ),
    [slider],
  );
  const applications = useApplications();

  return (
    <Box mt="$20" px="$6">
      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <HStack alignItems="center">
          <ArrowLeftIcon />
          <Text>Go back</Text>
        </HStack>
      </Pressable>
      <VStack mt="$2" space="xs">
        <Text>Edit hours for</Text>
        <Heading fontSize="$3xl">{params.title}</Heading>

        <Image
          borderRadius={8}
          source={{
            uri: params.uri as string,
          }}
          w={"100%"}
          h={"$96"}
          alignSelf="center"
          alt={"school"}
        />

        <Slider
          value={slider}
          mt={"$2"}
          onChange={(value) => setSlider(value)}
          size="md"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>
          {hours > 0 ? `${hours} hours` : ""}{" "}
          {minutes > 0 ? `${minutes} minutes` : ""}
        </Text>
        <Button
          mt={"$4"}
          w={"100%"}
          bgColor="$red500"
          onPress={() => {
            router.back();
            applications.setApplications(
              applications.applications.filter(
                (_, key) => key !== Number(params.key),
              ),
            );
          }}
        >
          <ButtonText>Revoke Application</ButtonText>
        </Button>
        <Button
          mt={"$1"}
          w={"100%"}
          onPress={() => {
            router.back();
            applications.setApplications(
              applications.applications.map((value, key) => {
                return key === Number(params.key)
                  ? {
                      info: value.info,
                      amountTime: (slider / 100) * Number(params.timeNeeded),
                    }
                  : value;
              }),
            );
          }}
        >
          <ButtonText>Submit</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
