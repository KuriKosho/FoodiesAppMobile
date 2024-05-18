import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserProfile = async () => {
    try {
      await AsyncStorage.setItem("userProfile", JSON.stringify(user));
    } catch (error) {
        console.log("Error:", error);
    }
}
const getUserProfile = async () => {
    try {
        const userProfile = await AsyncStorage.getItem("userProfile");
        return JSON.parse(userProfile ?? "{}");
    } catch (error) {
        console.log("Error:", error);
        return {};
    }
}
const deleteUserProfile = async () => {
    try {
        await AsyncStorage.removeItem("userProfile");
    } catch (error) {
        console.log("Error:", error);
    }
}
export default {setUserProfile, getUserProfile, deleteUserProfile}