import React from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination } from "../../slices/navSlice";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	return (
		<KeyboardAvoidingView behavior='padding' style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-3 text-xl`}>Hello Rider!</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						placeholder='Where to?'
						query={{ key: GOOGLE_MAPS_KEY, language: "en" }}
						minLength={2}
						returnKeyType={"search"}
						nearbyPlacesAPI='GooglePlacesSearch'
						debounce={400}
						fetchDetails={true}
						enablePoweredByContainer={false}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details.geometry.location,
									description: data.description,
								})
							);
							console.log(details.geometry.location, data.description);
							navigation.navigate("RideOptionsCard");
						}}
						styles={inputBoxStyles}
					/>
				</View>

				<NavFavorites />
			</View>

			{/* <View
				style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
			>
				<TouchableOpacity
					onPress={() => navigation.navigate("RideOptionsCard")}
					style={tw`flex bg-black flex-row justify-between w-24 px-4 py-3 rounded-full`}
				>
					<Icon name='car' type='font-awesome' color='white' size={16} />
					<Text style={tw`text-white text-center`}>Rides</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
				>
					<Icon
						name='fast-food-outline'
						type='ionicon'
						color='black'
						size={16}
					/>
					<Text style={tw`text-center`}>Eats</Text>
				</TouchableOpacity>
			</View> */}
		</KeyboardAvoidingView>
	);
};

export default NavigateCard;

const inputBoxStyles = StyleSheet.create({
	container: { backgroundColor: "white", paddingTop: 20, flex: 0 },
	textInput: { backgroundColor: "#DDDDDF", borderRadius: 0, fontSize: 18 },
	textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
});
