import HomeScreen from "./MainScreen/HomeScreen";
import FavoriteScreen from "./MainScreen/FavoriteScreen";
import ProfileScreen from "./MainScreen/ProfileScreen";
import SavedScreen from "./MainScreen/SavedScreen";
import SearchScreen from "./MainScreen/SearchScreen";
import BottomBar from "../layouts/nav/BottomBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenOne from "../test/ScreenOne";
import ScreenTwo from "../test/ScreenTwo";
import ScreenThree from "../test/ScreenThree";
import ScreenFour from "../test/ScreenFour";
import ScreenFive from "../test/ScreenFive";
// library, name, size, color
const tabScreens = [
    {   
        tabName: "tabHome",
        name: "HomeScreen",
        component: HomeScreen,
            childComponent: [
            { 
            childName: "SC1",
            childComponent: ScreenOne,
            }
        ],
        icon: {
            library: "AntDesign",
            name: "home",
            size: 24,
            color: "#000"
        },
    },
    {
        tabName: "tabSaved",
        name: "SavedScreen",
        component: SavedScreen,
            childComponent: [
            { 
            childName: "SC2",
            childComponent: ScreenTwo,
            }
        ],
        icon: {
            library: "Ionicons",
            name: "bookmarks-outline",
            size: 24,
            color: "#000"
        }
    },
    {
        tabName: "tabFavorite",
        name: "FavoriteScreen",
        component: FavoriteScreen,
            childComponent: [
            { 
            childName: "SC3",
            childComponent: ScreenThree,
            }
        ],
        icon: {
            library: "Ionicons",
            name: "heart-sharp",
            size: 24,
            color: "#000"
        },
    },
    {
        tabName: "tabSearch",
        name: "SearchScreen",
        component: SearchScreen,
            childComponent: [
            { 
            childName: "SC4",
            childComponent: ScreenFour,
            }
        ],
        icon: {
            library: "Feather",
            name: "search",
            size: 24,
            color: "#000"
        }
    },
    {
        tabName: "tabProfile",
        name: "ProfileScreen",
        component: ProfileScreen,
        childComponent: [
            { 
            childName: "SC5",
            childComponent: ScreenFive,
            }
        ],
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
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="BottomBar">
            <Stack.Screen name="BottomBar">
                {() => <BottomBar tabScreens={tabScreens}/> }
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default MainScreen;