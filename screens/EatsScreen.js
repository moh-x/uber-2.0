import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Categories from "../components/eats/Categories";
import HeaderTabs from "../components/eats/HeaderTabs";
import RestaurantItems, {
	restaurants,
} from "../components/eats/RestaurantItems";

const YELP_API_KEY = "";

const EatsScreen = () => {
	const [restaurantsData, setRestaurantsData] = useState(restaurants);

	return (
		<SafeAreaView style={tw`bg-gray-300 flex-1 mt-5`}>
			<HeaderTabs />
			<Categories />

			<RestaurantItems restaurantsData={restaurantsData} />
		</SafeAreaView>
	);
};

export default EatsScreen;

const styles = StyleSheet.create({});
