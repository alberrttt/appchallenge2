import React, { useState } from "react";
import {
  Box,
  InputField,
  Button,
  Text,
  Input,
  VStack,
  ButtonText,
  InputSlot,
  InputIcon,
  Heading,
  FormControl,
  HStack,
  RadioGroup,
  RadioIndicator,
  Radio,
  RadioIcon,
  CircleIcon,
  Image,
  RadioLabel,
} from "@gluestack-ui/themed";
import { useLoginStore } from "./store";
import { Stack, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

export default function () {
  const login = useLoginStore((state) => state);
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [zipcode, setZipcode] = useState(0);
  return (
    <Box px={"$8"} mt="$24">
      <HStack alignItems="center" justifyContent="space-between">
        <Heading fontSize={"$5xl"} pt="$8">
          Easervice
        </Heading>
        <Image
          aspectRatio={1}
          flex={1}
          alt={""}
          borderRadius={8}
          source={require("../assets/images/unnamed.png")}
        />
      </HStack>
      <FormControl
        p="$4"
        borderWidth="$1"
        borderRadius="$lg"
        borderColor="$borderLight300"
        sx={{
          _dark: {
            borderWidth: "$1",
            borderRadius: "$lg",
            borderColor: "$borderDark800",
          },
        }}
      >
        <VStack>
          <Heading color="$textDark900" fontSize={"$4xl"} py="$4">
            Sign Up
          </Heading>
          <VStack gap={"$4"}>
            <VStack space="xs">
              <Text
                color={"$textLight600"}
                lineHeight="$xs"
                fontFamily="Lato"
                fontSize={"$xl"}
              >
                Your Name
              </Text>
              <Input>
                <InputField
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.nativeEvent.text);
                  }}
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text
                color={"$textLight600"}
                lineHeight="$xs"
                fontFamily="Lato"
                fontSize={"$xl"}
              >
                Password
              </Text>
              <Input>
                <InputField type={"password"} />
                <InputSlot
                  pr="$3"
                  // onPress={handleState}
                >
                  {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                  <InputIcon
                    // as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$darkBlue500"
                  />
                </InputSlot>
              </Input>
            </VStack>
            <VStack space="xs">
              <Text
                color={"$textLight600"}
                lineHeight="$xs"
                fontFamily="Lato"
                fontSize={"$xl"}
              >
                Phone Number
              </Text>
              <Input>
                <InputField type={"text"} />
                <InputSlot
                  pr="$3"
                  // onPress={handleState}
                >
                  {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                  <InputIcon
                    // as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$darkBlue500"
                  />
                </InputSlot>
              </Input>
            </VStack>
            <VStack space="xs">
              <Text
                color={"$textLight600"}
                lineHeight="$xs"
                fontFamily="Lato"
                fontSize={"$xl"}
              >
                Zip Code
              </Text>
              <Input>
                <InputField
                  type="text"
                  value={zipcode ? String(zipcode) : ""}
                  onChange={(e) => {
                    setZipcode(Number(e.nativeEvent.text));
                  }}
                />
              </Input>
            </VStack>
          </VStack>

          <Button
            mt={"$4"}
            p={"$2"}
            ml="auto"
            backgroundColor={"$primary400"}
            onPress={() => {
              login.zipcode = zipcode;

              login.setLoggedIn(name);
              router.push("/(tabs)");
            }}
            w={"100%"}
          >
            <ButtonText fontSize={"$2xl"}>Sign Up</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
}
