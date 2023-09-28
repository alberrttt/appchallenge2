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

export default function Login() {
	const login = useLoginStore((state) => state);
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
				<VStack gap={"$4"}>
					<Heading
						color="$textDark900"
						fontSize={"$4xl"}
						py="$4"
					>
						Login
					</Heading>
					<VStack>
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
						<Box py={"$2"} />
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
								{/* <InputField type={showPassword ? "text" : "password"} /> */}
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
					<HStack
						w="100%"
						justifyContent="flex-start"
						alignItems="flex-end"
					>
						<Button
							p={"$2"}
							mt="$4"
							ml="auto"
							backgroundColor={"$primary400"}
							onPress={() => {
								login.setLoggedIn("a");
							}}
							w={"100%"}
						>
							<ButtonText fontSize={"$2xl"}>Login</ButtonText>
						</Button>
					</HStack>
				</VStack>
			</FormControl>
		</Box>
	);
}
