import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectDestination } from "../slices/navSlice";

const Restaurant = () => {
	return (
		<View>
			<About />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
		</View>
	);
};

const About = () => {
	const destination = useSelector(selectDestination);
	console.log("DESTINATION", destination);

	return (
		<View>
			<Image
				source={{ uri: destination.image_url }}
				style={{ width: "100%", height: 180 }}
			/>
			<Text style={tw`text-2xl font-semibold mt-2 mx-3`}>
				{destination.description}
			</Text>
			<Text></Text>
		</View>
	);
};

export default Restaurant;

const styles = StyleSheet.create({});
