import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {} from "react-native-svg";
import { useLoginStore } from "./_layout";
import { Button } from "react-native";

export default function Login() {
	const login = useLoginStore((state) => state);
	return (
		<View style={styles.screen1}>
			<Text style={styles.login}>{`Login`}</Text>
			{/* RN-Flow:: can be replaced with <Field  /> */}
			<View style={styles.field}>
				<View style={styles.rectangle1} />
				<Text style={styles.yourname}>{`Your name`}</Text>
				<Text style={styles.typehere}>{`Type here`}</Text>
			</View>
			{/* RN-Flow:: can be replaced with <_field  /> */}
			<View style={styles._field}>
				<View style={styles._rectangle1} />
				<Text style={styles._yourname}>{`Your password`}</Text>
				<Text style={styles._typehere}>{`Type here`}</Text>
			</View>
			{/* RN-Flow:: can be replaced with <PrimaryButton  /> */}
			<Pressable
				onPress={() => {
					login.logged_in = true;
				}}
			>
				<View style={styles.primaryButton}>
					<View style={styles.__rectangle1} />
					<Text style={styles.button}>{`Login`}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	screen1: {
		flexShrink: 0,
		height: 844,
		width: 390,
		backgroundColor: "rgba(255, 255, 255, 1)",
		alignItems: "flex-start",
		rowGap: 0,
		borderRadius: 48,
	},
	login: {
		position: "absolute",
		flexShrink: 0,
		top: 202,
		right: 45,
		bottom: 589,
		left: 30,
		textAlign: "left",
		color: "rgba(27, 72, 0, 1)",
		fontFamily: "Inter",
		fontSize: 36,
		fontWeight: "400",
		letterSpacing: 0,
	},
	field: {
		position: "absolute",
		flexShrink: 0,
		top: 309,
		bottom: 492,
		left: 39,
		right: 39,
		alignItems: "flex-start",
		rowGap: 0,
	},
	rectangle1: {
		position: "absolute",
		flexShrink: 0,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: "rgba(255, 255, 255, 1)",
		borderWidth: 1,
		borderColor: "rgba(46, 124, 0, 1)",
		borderRadius: 8,
	},
	yourname: {
		position: "absolute",
		flexShrink: 0,
		top: -30,
		right: 0,
		bottom: 48,
		left: 1,
		textAlign: "left",
		color: "rgba(55, 120, 16, 1)",
		fontFamily: "Lato",
		fontSize: 18,
		fontWeight: "400",
		letterSpacing: 0,
	},
	typehere: {
		position: "absolute",
		flexShrink: 0,
		top: 9,
		right: 5,
		bottom: 8,
		left: 15,
		textAlign: "left",
		color: "rgba(131, 184, 104, 1)",
		fontFamily: "Lato",
		fontSize: 18,
		fontWeight: "400",
		letterSpacing: 0,
	},
	_field: {
		position: "absolute",
		flexShrink: 0,
		top: 398,
		bottom: 403,
		left: 38,
		right: 40,
		alignItems: "flex-start",
		rowGap: 0,
	},
	_rectangle1: {
		position: "absolute",
		flexShrink: 0,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: "rgba(255, 255, 255, 1)",
		borderWidth: 1,
		borderColor: "rgba(46, 124, 0, 1)",
		borderRadius: 8,
	},
	_yourname: {
		position: "absolute",
		flexShrink: 0,
		top: -30,
		right: 0,
		bottom: 48,
		left: 1,
		textAlign: "left",
		color: "rgba(55, 120, 16, 1)",
		fontFamily: "Lato",
		fontSize: 18,
		fontWeight: "400",
		letterSpacing: 0,
	},
	_typehere: {
		position: "absolute",
		flexShrink: 0,
		top: 9,
		right: 5,
		bottom: 8,
		left: 15,
		textAlign: "left",
		color: "rgba(131, 184, 104, 1)",
		fontFamily: "Lato",
		fontSize: 18,
		fontWeight: "400",
		letterSpacing: 0,
	},
	primaryButton: {
		position: "absolute",
		flexShrink: 0,
		top: 495,
		bottom: 296,
		left: 32,
		right: 45,
		alignItems: "flex-start",
		rowGap: 0,
	},
	__rectangle1: {
		position: "absolute",
		flexShrink: 0,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: "rgba(131, 198, 0, 1)",
		borderRadius: 8,
	},
	button: {
		position: "absolute",
		flexShrink: 0,
		top: 10,
		right: 1,
		bottom: 12,
		left: 0,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
		fontFamily: "Lato",
		fontSize: 18,
		fontWeight: "400",
		letterSpacing: 0,
	},
});
