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
				<VStack>
					<Heading
						color="$textDark900"
						fontSize={"$4xl"}
						py="$4"
					>
						Login
					</Heading>
					<VStack space="xs">
						<Text
							color="$text500"
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
							color="$text500"
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
					<Button
						p={"$2"}
						mt="$4"
						ml="auto"
						backgroundColor="#03A9F4"
						onPress={() => {
							// setShowModal(false);
						}}
					>
						<ButtonText color="$white">Save</ButtonText>
					</Button>
				</VStack>
			</FormControl>
		</Box>
	);
}
