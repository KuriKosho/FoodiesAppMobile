import HomeScreen from "./MainScreen/HomeScreen";
import FavoriteScreen from "./MainScreen/FavoriteScreen";
import ProfileScreen from "./MainScreen/ProfileScreen";
import SavedScreen from "./MainScreen/SavedScreen";
import SearchScreen from "./MainScreen/SearchScreen";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomBar from "../layouts/nav/BottomBar";
import Layout from "../layouts/body/Layout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// library, name, size, color
const tabScreens = [
    {
        name: "HomeScreen",
        component: HomeScreen,
        icon: {
            library: "AntDesign",
            name: "home",
            size: 24,
            color: "#000"
        },
    },
    {
        name: "SavedScreen",
        component: SavedScreen,
        icon: {
            library: "Ionicons",
            name: "bookmarks-outline",
            size: 24,
            color: "#000"
        }
    },
    {
        name: "FavoriteScreen",
        component: FavoriteScreen,
        icon: {
            library: "Ionicons",
            name: "heart-sharp",
            size: 24,
            color: "#000"
        },
    },
    {
        name: "SearchScreen",
        component: SearchScreen,
        icon: {
            library: "Feather",
            name: "search",
            size: 24,
            color: "#000"
        }
    },
    {
        name: "ProfileScreen",
        component: ProfileScreen,
        icon: {
            library: "FontAwesome",
            name: "user-o",
            size: 24,
            color: "#000"
        }
    }
]

export { HomeScreen, FavoriteScreen, ProfileScreen, SavedScreen, SearchScreen , tabScreens};

const MainScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="BottomBar">
                {() => <BottomBar tabScreens={tabScreens}/> }
            </Stack.Screen>
            
        </Stack.Navigator>
    )
}

export default MainScreen;