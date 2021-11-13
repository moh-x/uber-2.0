import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_KEY } from "@env";
import {
	selectDestination,
	selectLocations,
	selectOrigin,
	setTravelTimeInfo,
} from "../../slices/navSlice";
import ForknKnife from "../custom/ForknKnife";

const Map = () => {
	const origin = useSelector(selectOrigin);
	const destination = useSelector(selectDestination);
	const locations = useSelector(selectLocations);
	const mapRef = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!origin || !destination || !locations) return;

		// Zoom to fit markers
		mapRef.current.fitToSuppliedMarkers(
			["origin", "destination" /*...locations?.map((_, i) => `location${i}`)*/],
			{
				edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
			}
		);
	}, [origin, destination, locations]);

	useEffect(() => {
		if (!origin || !destination) return;

		const getTravelTime = async () => {
			fetch(
				`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`
			)
				.then((res) => res.json())
				.then((data) => dispatch(setTravelTimeInfo(data.rows[0].elements[0])))
				.catch((e) => console.log(e));
		};

		getTravelTime();
	}, [origin, destination, GOOGLE_MAPS_KEY]);

	useEffect(() => {}, []);

	return (
		<MapView
			ref={mapRef}
			style={tw`flex-1`}
			mapType='mutedStandard'
			initialRegion={{
				latitude: origin?.location.lat,
				longitude: origin?.location.lng,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}
		>
			{origin && destination && (
				<MapViewDirections
					origin={origin.description}
					destination={destination.description}
					apikey={GOOGLE_MAPS_KEY}
					strokeWidth={3}
					strokeColor='blue'
				/>
			)}

			{origin?.location && (
				<Marker
					coordinate={{
						latitude: origin.location.lat,
						longitude: origin.location.lng,
					}}
					title='Origin'
					description={origin.description}
					identifier='origin'
				/>
			)}

			{destination?.location && (
				<Marker
					coordinate={{
						latitude: destination.location.lat,
						longitude: destination.location.lng,
					}}
					title='Destination'
					description={destination.description}
					identifier='destination'
					pinColor='green'
				/>
			)}

			{locations?.length > 0 &&
				locations.map(({ lat, lng, name, distance }, i) => (
					<Marker
						key={i}
						coordinate={{
							latitude: lat,
							longitude: lng,
						}}
						title={name}
						description={distance}
						identifier={`location${i}`}
						pinColor='blue'
					/>
				))}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({});
