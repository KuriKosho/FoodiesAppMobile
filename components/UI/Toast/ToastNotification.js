import React from "react";
import { View, Text } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const ToastNotification = ({type, header, description}) => {
    const TypeIcon = () => {
        switch(type){
            case "success":
                return (
                    <FontAwesome5 name="check-circle" size={26} color="#F6F4F4" />
                );
                break;
            case "warning":
                return (
                    <Icon name="info" size={30} color="#F6F4F4" />
                );
                break;
            case "error":
                return (
                    <AntDesign name="warning" size={24} color="black" />
                );
                break;
            default:
                <AntDesign name="warning" size={24} color="black" />
        }
    }
    return(
        <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
            style={{
                top: 70,
                backgroundColor: '#20669b',
                width: '90%',
                position: 'absolute',
                borderRadius: 5,
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                shadowColor: '#003049',
                shadowOpacity: 0.4,
                shadowRadius: 2,
                shadowOffset: {width: 0, height: 1},
                elevation: 2,
                zIndex: 2,
            }}
        >
            
            <FontAwesome5 name="check-circle" size={26} color="#F6F4F4" />
            <MaterialIcons name="error-outline" size={30} color="#F6F4F4" />
            <View>
                <Text style={{
                    color: '#F6F4F4',
                    fontWeight: 'bold',
                    marginLeft: 10,
                    fontSize: 16,
                }}>{header}</Text>
                <Text style={{
                    color: '#F6F4F4',
                    fontWeight: '500',
                    marginLeft: 10,
                    fontSize: 14,
                }}>{description}</Text>
            </View>
        </Animated.View>
    )
}

export default ToastNotification;