const { default: AsyncStorage } = require("@react-native-async-storage/async-storage");

const setToken = async (token) => {
    await AsyncStorage.setItem("token", token);
}
const getToken = async () => {
    return await AsyncStorage.getItem("token");
}
const removeToken = async () => {
    await AsyncStorage.removeItem("token");
}
const checkTokenExists = async () => {
    const token = await AsyncStorage.getItem("token");
    return token !== null;
}
export default {setToken, getToken, removeToken, checkTokenExists}