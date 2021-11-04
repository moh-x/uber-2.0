import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { YELP_API_KEY } from "@env";
import Categories from "../components/eats/Categories";
import HeaderTabs from "../components/eats/HeaderTabs";
import RestaurantItems, {
	restaurants,
} from "../components/eats/RestaurantItems";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/eats/BottomTabs";

const EatsScreen = () => {
	const origin = useSelector(selectOrigin);
	const [activeTab, setActiveTab] = useState("Delivery");
	const [restaurantsData, setRestaurantsData] = useState(restaurants);

	const getRestaurants = () => {
		const baseURL =
			"https://api.yelp.com/v3/businesses/search?categories=food,nightlife,restaurants";
		const searchGeoEndpoint = `${baseURL}&latitude=${origin.location.lat}&longitude=${origin.location.lng}`;
		const searchLocationEndpoint = `${baseURL}&latitude=${origin.location.lat}&longitude=${origin.location.lng}`;

		const apiOptions = { headers: { Authorization: `Bearer ${YELP_API_KEY}` } };

		return fetch(searchGeoEndpoint, apiOptions)
			.then((res) => res.json())
			.then((json) => {
				let data = json?.businesses;
				if (data.length < 5) {
					fetch(searchLocationEndpoint, apiOptions)
						.then((res) => res.json())
						.then((json) =>
							json?.businesses.forEach((business) => {
								if (!data.map(({ id }) => id).includes(business?.id))
									data.push(business);
							})
						);
				}
				return setRestaurantsData(
					data.filter(
						(business) =>
							business.transactions?.includes(activeTab.toLowerCase()) ||
							business.transactions?.length == 0
					)
				);
			});
	};

	useEffect(() => {
		getRestaurants();
	}, [activeTab]);

	return (
		<SafeAreaView style={tw`bg-gray-300 flex-1 mt-5`}>
			<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
			<Categories />

			<RestaurantItems restaurantsData={restaurantsData} />

			<Divider width={1} />
			<BottomTabs />
		</SafeAreaView>
	);
};

export default EatsScreen;

const styles = StyleSheet.create({});
