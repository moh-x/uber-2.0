import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { setDestination } from "../../slices/navSlice";

function RestaurantCard({
	id,
	name,
	image_url,
	categories,
	coordinates: { latitude, longitude },
	price,
	review_count,
	rating,
	display_phone,
	display_address,
	is_closed,
	selectedId,
	setSelectedId,
}) {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	// const [selected, setSelected] = useState(false);

	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={() => {
				setSelectedId(id);
				dispatch(
					setDestination({
						location: { lat: latitude, lng: longitude },
						description: name,
					})
				);
			}}
			style={tw`flex-row mt-1 p-3 bg-white rounded-lg ${
				selectedId === id && "bg-gray-200"
			}`}
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
				<TouchableOpacity
					onPress={() => {
						dispatch(
							setDestination({
								location: { lat: latitude, lng: longitude },
								description: name,
								image_url,
								categories,
								rating,
								price,
								review_count,
								display_phone,
								display_address,
								is_closed,
							})
						);
						navigation.navigate("Restaurant");
					}}
				>
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
}

export default RestaurantCard;
