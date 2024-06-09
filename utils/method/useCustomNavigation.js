import { useNavigation } from "@react-navigation/native";

export function useCustomNavigation() {
    const navigation = useNavigation();
    const goToScreen = (name) => {
      navigation.navigate(name);
    }
    const goToScreenWithReplace = (name) => {
      navigation.replace(name)
    }
    const goToScreenWithParams = (name, params) => {
      navigation.navigate(name, params)
    }
    return {goToScreen, goToScreenWithReplace, goToScreenWithParams}    
}

