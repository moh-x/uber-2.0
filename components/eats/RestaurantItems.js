import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

export const restaurants = [
	{
		id: "001",
		name: "Beachside Bar House",
		imageUrl:
			"http://appsmav.com/blog/wp-content/uploads/2013/07/Apps-Mav-Restaurant-Cafe-App.jpeg",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1255,
		rating: 4,
	},
	{
		id: "002",
		name: "Countryside Bar",
		imageUrl:
			"https://static-otelico.com/cache/montmartre_apolonia/hotel_paris_montmartre_resto.jpg",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1255,
		rating: 4.5,
	},
	{
		id: "003",
		name: "Late Night Jollof",
		imageUrl:
			"http://appsmav.com/blog/wp-content/uploads/2013/07/Apps-Mav-Restaurant-Cafe-App.jpeg",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1255,
		rating: 4.5,
	},
	{
		id: "004",
		name: "Beef Noodles",
		imageUrl:
			"https://static-otelico.com/cache/montmartre_apolonia/hotel_paris_montmartre_resto.jpg",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1255,
		rating: 4.5,
	},
];

const RestaurantItems = ({ restaurantsData }) => {
	const renderRestaurants = ({
		item: { name, image_url, categories, price, reviews, rating },
	}) => (
		<TouchableOpacity
			activeOpacity={1}
			style={tw` flex-row mt-1 p-3 bg-white rounded-lg`}
		>
			<View style={tw`w-4/12`}>
				<Image
					source={{
						uri:
							image_url ||
							"https://yasirsgyropita.com/img/placeholders/placeholder_restaurant_steak.png?v=1",
					}}
					alt={name}
					style={{ width: "100%", height: 72 }}
				/>
			</View>

			<View style={tw`justify-between w-7/12 p-2`}>
				<Text style={tw`text-base font-bold`}>{name}</Text>

				<View style={tw`flex-row`}>
					<Text style={tw`text-sm text-gray-500`}>34-45 · min</Text>
					<Text style={tw`text-sm font-semibold ml-4`}>{rating}</Text>
				</View>
			</View>

			<View style={tw`w-1/12 items-end justify-between`}>
				<TouchableOpacity>
					<Icon
						name='heart-outline'
						type='material-community'
						size={28}
						color='gray'
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon
						name='sign-direction'
						type='material-community'
						size={28}
						color='gray'
					/>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);

	return (
		<FlatList
			data={restaurantsData}
			keyExtractor={(_, idx) => idx.toString()}
			renderItem={renderRestaurants}
		/>
	);
};

export default RestaurantItems;

const styles = StyleSheet.create({});
