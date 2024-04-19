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

