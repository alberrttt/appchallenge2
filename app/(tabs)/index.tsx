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
  const [blur, setBlur] = useState(true);
  useEffect(() => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setBlur(false);
    });
  }, []);
  return (
    <Box p={"$8"} px={"$4"} mt="$10">
      <VStack>
        <Animated.View
          style={{
            top: anim,
          }}
        >
          <Heading fontSize={"$4xl"} color="$trueGray600">
            Welcome, {logins.name}
          </Heading>
          <Heading pt="$2" fontSize={"$4xl"}>
            Here's some community service
          </Heading>
        </Animated.View>
        <Text py="$1">Near {logins.zipcode}, Fullerton</Text>
        {blur ? (
          <BlurView
            intensity={20}
            tint={"light"}
            style={{
              position: "absolute",
              top: 110,
              zIndex: 4,
              height: "100%",
              width: "100%",
            }}
          />
        ) : (
          ""
        )}

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
