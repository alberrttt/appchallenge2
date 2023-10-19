import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  ArrowLeftIcon,
  Box,
  Button,
  ButtonGroup,
  ButtonText,
  Center,
  CloseIcon,
  HStack,
  Heading,
  Icon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Pressable,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Textarea,
  TextareaInput,
  Toast,
  VStack,
  useToast,
} from "@gluestack-ui/themed";
import {
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import React, { useEffect, useMemo } from "react";
import { BlurView } from "expo-blur";
import { useState } from "react";
import { useApplications } from "./store";
import { getHoursAndMinutesFromFractionalHour } from "../hours";

export default function Apply() {
  const [Hours, setHours] = useState(0);
  const { hours, minutes } = useMemo(
    () => getHoursAndMinutesFromFractionalHour(Hours),
    [Hours],
  );
  const props = useGlobalSearchParams();

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
      <VStack mt="$4">
        <Text fontSize="$2xl">Volunteer at</Text>

        <Heading fontSize="$4xl" pt="$2">
          {props.title}
        </Heading>
        <VStack mt="$4">
          <VStack space="xs" gap="$4" maxWidth={"$80"}>
            <Text
              color={"$textLight600"}
              lineHeight="$xs"
              fontFamily="Lato"
              fontSize={"$xl"}
            >
              How many hours can you volunteer?
            </Text>

            <Slider
              defaultValue={0}
              size="md"
              orientation="horizontal"
              isDisabled={false}
              isReversed={false}
              onChange={(num) =>
                setHours((num / 100) * Number(props.timeNeeded))
              }
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            {!hours && !minutes ? (
              <Text>0 minutes</Text>
            ) : (
              <Text>
                {hours > 0 ? `${hours} ${hours == 1 ? "hour" : "hours"}` : ""}
                {minutes > 0 ? ` ${minutes} minutes` : ""}
              </Text>
            )}
            <Box>
              <Heading>Any notes or comments?</Heading>
              <Textarea size="md">
                <TextareaInput placeholder="Type here" />
              </Textarea>
            </Box>
            <SubmitButton hours={Hours} />
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}

function SubmitButton({ hours }: { hours: number }) {
  const [showAlertDialog, setShowAlertDialog] = React.useState(true);
  const toast = useToast();
  const router = useRouter();
  const props = useGlobalSearchParams();
  const apps = useApplications();
  console.log(hours);

  return (
    <>
      <Button
        mt={"$4"}
        w={"100%"}
        onPress={() => {
          router.back();
          router.back();
          apps.pushApplication({
            amountTime: hours,
            info: {
              title: props.title,
              uri: props.uri,
              timeNeeded: props.timeNeeded,
              distance: props.distance,
            },
          });
        }}
      >
        <ButtonText>Submit</ButtonText>
      </Button>
    </>
  );
}
