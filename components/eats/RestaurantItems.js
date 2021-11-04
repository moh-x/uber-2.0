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
	return (
		<FlatList
			data={restaurantsData}
			keyExtractor={(item, idx) => idx.toString()}
			renderItem={({
				item: { name, image_url, categories, price, reviews, rating },
			}) => (
				<TouchableOpacity
					activeOpacity={1}
					style={tw`my-2 px-3 py-2 bg-white rounded-lg`}
				>
					<View>
						<Image
							source={{ uri: image_url }}
							alt={name}
							style={{ width: "100%", height: 180 }}
						/>
						<TouchableOpacity style={tw`absolute right-4 top-4`}>
							<Icon
								name='heart-outline'
								type='material-community'
								size={25}
								color='#fff'
							/>
						</TouchableOpacity>
					</View>

					<View style={tw`flex-row justify-between items-center mt-2`}>
						<View>
							<Text style={tw`text-base font-bold`}>{name}</Text>
							<Text style={tw`text-sm text-gray-500`}>34-45 · min</Text>
						</View>
						<View
							style={tw`bg-gray-300 w-8 h-8 p-1 rounded-full justify-center items-center`}
						>
							<Text style={tw`font-semibold text-center`}>{rating}</Text>
						</View>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default RestaurantItems;

const styles = StyleSheet.create({});
