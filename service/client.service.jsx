import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserProfile = async (userProfile) => {
    try {
      await AsyncStorage.setItem("userProfile", JSON.stringify(userProfile));
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
const setPost = async (post) => {
    try {
        await AsyncStorage.setItem("post", JSON.stringify(post));
    } catch (error) {
        console.log("Error:", error);
    }
}
const deletePost = async () => {
    try {
        await AsyncStorage.removeItem("post");
    } catch (error) {
        console.log("Error:", error);
    }
}
const getPost = async () => {
    try {
        const post = await AsyncStorage.getItem("post");
        return JSON.parse(post ?? {});
    } catch (error) {
        console.log("Error:", error);
        return null;
    }

}
export default {setUserProfile, getUserProfile, deleteUserProfile, deletePost, getPost, setPost}