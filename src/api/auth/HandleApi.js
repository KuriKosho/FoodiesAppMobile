import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLogin =  async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    if (token ==null) {
      return false;
    } else {
      return true;
    }
  }

export const logOutHandle = async () => {
    try{
      await AsyncStorage.removeItem("token");
      console.log("Removed token successfully");
      return true;
    } catch(err){
      console.error(err);
    }
    return false;
}
