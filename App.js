import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src";

registerScreens();

Navigation.startSingleScreenApp({
	screen: {
		screen: "s1",
		title: "S1",
		navigatorStyle: {
			navBarHidden: false
		}
	},
	drawer: {
		left: {
			screen: "drawer",
		  }
	}
});
