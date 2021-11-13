import React from "react";
import { SafeAreaView, View, Image, KeyboardAvoidingView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setLocations, setOrigin } from "../slices/navSlice";
import NavOptions from "../components/ride/NavOptions";

import NavFavorites from "../components/ride/NavFavorites";

const HomeScreen = () => {
	const dispatch = useDispatch();

	return (
		<SafeAreaView style={tw`bg-white mt-5 h-full`}>
			<View style={tw`px-5 py-3 flex-1`}>
				<Image
					source={{ uri: "https://links.papareact.com/gzs" }}
					style={{ width: 100, height: 100, resizeMode: "contain" }}
				/>

				<KeyboardAvoidingView behavior='position'>
					<GooglePlacesAutocomplete
						placeholder='Where From?'
						nearbyPlacesAPI='GooglePlacesSearch'
						debounce={400}
						query={{ key: GOOGLE_MAPS_KEY, language: "en" }}
						minLength={2}
						returnKeyType={"search"}
						enablePoweredByContainer={false}
						fetchDetails={true}
						onPress={(data, details = null) => {
							dispatch(
								setOrigin({
									location: details?.geometry?.location,
									description: data?.description,
									identifier: details?.address_components?.reduce(
										(_, { long_name, types }) => {
											if (types.includes("administrative_area_level_1"))
												return long_name;
										}
									),
								})
							);
							dispatch(setDestination(null));
							dispatch(setLocations(null));
							// console.log("data", data, "details", details);
						}}
						styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
					/>
				</KeyboardAvoidingView>

				<NavOptions />

				<NavFavorites />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
