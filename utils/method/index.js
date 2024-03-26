import { useNavigation } from "@react-navigation/native";

export function useCustomNavigation() {
    const navigation = useNavigation();
    const goToScreen = (name) => {
      navigation.navigate(name);
    }
    const goToScreenWithReplace = (name) => {
      navigation.replace(name)
    }
    return {goToScreen, goToScreenWithReplace}    
}

export function createUsername(firstname, lastname) {
  const inputString = (lastname+firstname).trim();
  const formatString = inputString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const result = formatString.toLowerCase().replace(/\s/g, "");
  console.log(result);
  return result;
}