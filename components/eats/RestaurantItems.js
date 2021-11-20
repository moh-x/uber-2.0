import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import RestaurantCard from "./RestaurantCard";

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
	const [selectedId, setSelectedId] = useState(null);
	const renderRestaurants = ({
		item: {
			id,
			name,
			image_url,
			categories,
			coordinates,
			price,
			review_count,
			rating,
			display_phone,
			is_closed,
			location: { display_address },
		},
	}) => (
		<RestaurantCard
			id={id}
			name={name}
			image_url={image_url}
			categories={categories}
			coordinates={coordinates}
			price={price}
			rating={rating}
			review_count={review_count}
			display_phone={display_phone}
			display_address={display_address}
			is_closed={is_closed}
			selectedId={selectedId}
			setSelectedId={setSelectedId}
		/>
	);

	return (
		<FlatList
			data={restaurantsData}
			keyExtractor={(_, idx) => idx.toString()}
			renderItem={renderRestaurants}
			extraData={selectedId}
		/>
	);
};

export default RestaurantItems;

const styles = StyleSheet.create({});
