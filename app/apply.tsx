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
  VStack,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { BlurView } from "expo-blur";
import { useState } from "react";

export default function Apply() {
  const [hours, setHours] = useState(0);
  const Hours = Math.floor(hours);
  const minutes = Math.floor((hours - Hours) * 60);
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
          Sunset Lane
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
              defaultValue={30}
              size="md"
              orientation="horizontal"
              isDisabled={false}
              isReversed={false}
              onChange={(num) => setHours(num / 20)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text>
              {Hours > 0 ? `${Hours} ${hours == 1 ? "hour" : "hours"}` : ""}
              {minutes > 0 ? ` ${minutes} minutes` : ""}
            </Text>

            <Box>
              <Heading>Any notes or comments?</Heading>
              <Textarea size="md">
                <TextareaInput placeholder="Type here" />
              </Textarea>
            </Box>
            <SubmitButton />
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}

function SubmitButton() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(true);

  return (
    <>
      <Button
        mt={"$4"}
        w={"100%"}
        onPress={() => setShowAlertDialog(!showAlertDialog)}
      >
        <ButtonText>Submit</ButtonText>
      </Button>
      {showAlertDialog ? (
       
      ) : undefined}
    </>
  );
}
