import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

const items = [
	{ image: require("../../assets/shopping.png"), text: "Pickup" },
	{ image: require("../../assets/hamburger.png"), text: "Fast food" },
	{ image: require("../../assets/bread.png"), text: "Bakery" },
	{ image: require("../../assets/drink.png"), text: "Drinks" },
	{ image: require("../../assets/food.png"), text: "Swallow" },
	{ image: require("../../assets/shopping.png"), text: "Take Away" },
];

const Categories = () => {
	return (
		<View style={tw`mt-2 bg-white py-2 pl-4`}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{items.map((item, i) => (
					<View key={i} style={tw`items-center mr-4`}>
						<Image source={item.image} style={{ width: 30, height: 30 }} />
						<Text style={tw`font-bold`}>{item.text}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({});
