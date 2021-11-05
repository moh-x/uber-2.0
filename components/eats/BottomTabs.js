import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const BottomTabs = () => {
	return (
		<View style={tw`flex-row justify-between m-2 mx-4`}>
			{tabsData.map(({ icon, text }) => (
				<TabElement icon={icon} text={text} />
			))}
		</View>
	);
};

const tabsData = [
	{ icon: "home", text: "Home" },
	{ icon: "search", text: "Browse" },
	{ icon: "shopping-bag", text: "Grocery" },
	{ icon: "receipt", text: "Orders" },
	{ icon: "user", text: "Account", solid: true },
];

const TabElement = ({ icon, text, solid }) => (
	<TouchableOpacity>
		<Icon name={icon} type='font-awesome-5' solid />
		<Text>{text}</Text>
	</TouchableOpacity>
);

export default BottomTabs;

const styles = StyleSheet.create({});
