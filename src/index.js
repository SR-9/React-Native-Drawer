import { Navigation } from "react-native-navigation";

//import screens
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Drawer from "./Drawer";

export function registerScreens() {
	Navigation.registerComponent("drawer", () => Drawer);
	Navigation.registerComponent("s1", () => Screen1);
	Navigation.registerComponent("s2", () => screen2);
	Navigation.registerComponent("s3", () => Screen3);
}
