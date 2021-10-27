import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../../slices/navSlice";

const data = [
	{
		id: "123",
		title: "Get a ride",
		image: "https://links.papareact.com/3pn",
		screen: "Ride",
	},
	{
		id: "456",
		title: "Order Food",
		image: "https://links.papareact.com/28w",
		screen: "Eats",
	},
];

const NavOptions = () => {
	const navigation = useNavigation();
	const origin = useSelector(selectOrigin);

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			horizontal
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => navigation.navigate(item.screen)}
					style={tw`pr-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
					disabled={!origin}
				>
					<View style={tw`${!origin && "opacity-30"}`}>
						<Image
							source={{ uri: item.image }}
							style={{ width: 100, height: 100, resizeMode: "contain" }}
						/>
						<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
						<Icon
							name='arrowright'
							color='white'
							type='antdesign'
							style={tw`p-2 bg-black rounded-full w-10 mt-3`}
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;
