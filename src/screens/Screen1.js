import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

export default class Screen1 extends Component {
	state = {};

	_openDrawer = () => {
		console.log('clicked')
		this.props.navigator.toggleDrawer({
			side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
			animated: true, // does the toggle have transition animation or does it happen immediately (optional)
			to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
		  });
	}

	render() {
		return (
			<TouchableOpacity onPress = {this._openDrawer}>
				<Text>Screen1</Text>
			</TouchableOpacity>
		);
	}
}
