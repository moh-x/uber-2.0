import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const BottomTabs = () => {
	return (
		<View style={tw`flex-row justify-between m-2 mx-4`}>
			<Text>Footer</Text>
			<Text>Footer</Text>
			<Text>Footer</Text>
		</View>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({});
