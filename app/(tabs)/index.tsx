import { ActionSheetIOS, StyleSheet } from "react-native";

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
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Box p={"$8"} px={"$4"}>
        <VStack>
          <Heading fontSize={"$3xl"}>Community Service</Heading>
          <Box
            py={"$2"}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
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
              <Switch mx="$4" />
            </Box>
          </Box>
          <Posts />
        </VStack>
      </Box>
    </SafeAreaView>
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
