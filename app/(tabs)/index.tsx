import { ActionSheetIOS, Animated, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import {
  Box,
  ChevronDownIcon,
  FormControl,
  HStack,
  Text,
  View,
  Heading,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Switch,
  VStack,
  Image,
} from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import { Posts } from "../../components/Posts";
import { useEffect, useRef, useState } from "react";
import { useLoginStore } from "../store";
import { BlurView } from "expo-blur";
export default function HomeScreen() {
  const [urgent, setUrgent] = useState(false);
  const logins = useLoginStore();
  const anim = useRef(new Animated.Value(-200)).current;
  const [blur, setBlur] = useState(1);
  useEffect(() => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {});
  }, []);
  return (
    <Box p={"$8"} px={"$4"} mt="$10">
      <VStack>
        <Animated.View
          style={{
            top: anim,
          }}
        >
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Heading fontSize={"$4xl"} pt="$4" color="$trueGray600">
                Welcome,
              </Heading>
              <Heading fontSize={"$4xl"} pt="$2" color="$trueGray600">
                {logins.name}
              </Heading>
            </VStack>
            <Image
              aspectRatio={1}
              w={"auto"}
              h={"$24"}
              alt={""}
              borderRadius={8}
              source={require("../../assets/images/unnamed.png")}
            />
          </HStack>
        </Animated.View>
        <Text py="$1">
          Showing community service near {logins.zipcode}, Fullerton
        </Text>

        <Box
          pb={"$2"}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box flexGrow={1}>
            <Select>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Within 5 Miles" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </Box>
          <Box alignItems="center">
            <Text>Urgent</Text>
            <Switch mx="$4" value={urgent} onToggle={(a) => setUrgent(a)} />
          </Box>
        </Box>
        <Posts urgent={urgent} />
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
