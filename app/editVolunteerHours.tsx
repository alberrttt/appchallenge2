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
} from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function EditVolunteerHours() {
  const params = useLocalSearchParams();
  const router = useRouter();
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
      <VStack mt="$4" space="xs">
        <Text>Edit hours for</Text>
        <Heading fontSize="$3xl">{params.title}</Heading>
        <Slider
          defaultValue={0}
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
      </VStack>
    </Box>
  );
}
