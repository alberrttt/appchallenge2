import React from "react";
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
} from "@gluestack-ui/themed";
import { useLoginStore } from "./store";
import { Stack, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

export default function () {
	const login = useLoginStore((state) => state);
	const router = useRouter();
	return (
		<Box
			px={"$8"}
			mt="$48"
		>
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
					<Heading
						color="$textDark900"
						fontSize={"$4xl"}
						py="$4"
					>
						Login
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
								<InputField type="text" />
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
								<InputField type={'password'} />
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
								<InputField type={'text'} />
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
					</VStack>

					<Button
						p={"$2"}
						mt="$4"
						ml="auto"
						backgroundColor={"$primary400"}
						onPress={() => {
							login.setLoggedIn("a");
							router.push("/(tabs)");
						}}
						w={"100%"}
					>
						<ButtonText fontSize={"$2xl"}>Login</ButtonText>
					</Button>
				</VStack>
			</FormControl>
		</Box>
	);
}
