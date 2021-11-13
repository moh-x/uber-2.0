import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ForknKnife = () => {
	return (
		<View>
			<Text style={styles.text}>🍴</Text>
		</View>
	);
};

export default ForknKnife;

const styles = StyleSheet.create({
	text: {
		fontSize: 40,
		lineHeight: 40,
		textShadowColor: "blue",
		textShadowOffset: { width: 120, height: 120 },
		textShadowRadius: 120,
	},
});
