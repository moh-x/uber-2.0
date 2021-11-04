import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const HeaderTabs = ({ activeTab, setActiveTab }) => {
	return (
		<View style={tw`bg-white p-5`}>
			<View style={tw`flex-row self-center`}>
				<HeaderButton
					text='Delivery'
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<HeaderButton
					text='Pickup'
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			</View>
		</View>
	);
};

export default HeaderTabs;

const styles = StyleSheet.create({});

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
	<TouchableOpacity
		style={tw`bg-${
			activeTab == text ? "black" : "white"
		} py-2 px-4 rounded-full`}
		onPress={() => setActiveTab(text)}
	>
		<Text style={tw`text-${activeTab == text ? "white" : "black"} font-bold`}>
			{text}
		</Text>
	</TouchableOpacity>
);
