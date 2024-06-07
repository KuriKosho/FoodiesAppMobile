import clientService from "@/service/client.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLogin =  async () => {
  try{
    const token = await AsyncStorage.getItem("token");
    if (token ==null || token == undefined) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
}
export const logOutHandle = async () => {
    try{
      await AsyncStorage.removeItem("token");
      await clientService.deleteUserProfile();
      console.log("Removed token successfully");
      return true;
    } catch(err){
      console.error(err);
    }
    return false;
}
export const checkLogin = async( setValue, setLoading) =>{
  const tokenExists = await isLogin();
  if (tokenExists) {
    setValue(true);
    const token = await AsyncStorage.getItem("token");
    console.log("Token exists",token);
  } else {
    setValue(false);
    console.log("No exits !")
  }
  setLoading(false);
}
