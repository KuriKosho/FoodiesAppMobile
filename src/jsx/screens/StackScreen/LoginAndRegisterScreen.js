import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from '../../layouts/body/Layout';
import img1 from "../../../images/vectoGirl.png"
import ButtonNormal from '../../components/Button/ButtonNormal';
import { useNavigation } from '@react-navigation/native'
import HorizontalScroll from '../../components/Scroll/HorizontalScroll';
import { data } from '../../../Data/logoData';

const LoginAndRegisterScreen = () => {
    const navigation = useNavigation();
    const goToScreen = (name) => {
        navigation.navigate(name);
    }
    return (
        <Layout>
            <View style={styles.container}>
                <View style={styles.container_img}>
                    <Image source={img1} style={styles.image} />
                </View>
                <View style={styles.container}>
                    <View style={styles.containerBtn} >
                        <Text style={styles.text}>Foodies App</Text>
                        <View style={styles.customBtn}>
                            <ButtonNormal
                                action={() => goToScreen("RegisterScreen")}
                                backgroundColor={"#EB4F30"}
                                textColor={"white"}
                                textBold={500}
                                height={50}
                                width={"100%"}
                                letterSpacing={0}
                                radius={16}
                                text={"Create account"}
                                textSize={16}
                                lineHeight={20}
                            />
                        </View>
                        <View style={styles.customBtn}>
                            <ButtonNormal
                                action={() => goToScreen("LoginScreen")}
                                backgroundColor={"#EB4F30"}
                                textColor={"white"}
                                textBold={500}
                                height={50}
                                width={"100%"}
                                letterSpacing={0}
                                radius={16}
                                text={"Sign in"}
                                textSize={16}
                                lineHeight={20}
                            />
                        </View>
                    </View>
                    <View style={styles.logoBanner}>
                        <Text style={styles.textMini}>Foodies App's sponsors</Text>
                        <ScrollView horizontal>
                            <HorizontalScroll data={data} />
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Layout>
    )
}

export default LoginAndRegisterScreen

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const imageWidth = 300; // Original width of the image
const imageHeight = 300; // Original height of the image
const aspectRatio = imageWidth / imageHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#F7F9FC",
    },
    image: {
        width: screenWidth,
        height: screenWidth / aspectRatio,
        resizeMode: 'contain',
    },
    container_img: {
        flex: 1,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: 'center',
        color: '#EB4F30',
        paddingBottom: 20,
        lineHeight: 28
    },
    containerBtn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
    },
    customBtn: {
        width: "100%",
        marginVertical: 10,
    },
    logoBanner: {
        flex: 1,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
    },
    textMini: {
        marginVertical: 15,
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 20
    }
})