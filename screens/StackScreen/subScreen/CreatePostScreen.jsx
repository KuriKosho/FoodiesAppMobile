import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCustomNavigation } from '@/utils/method/useCustomNavigation';
import clientService from '@/service/client.service';
import DynamicIcon from '@/components/UI/Icon/DynamicIcon';
import ButtonSmall from '@/components/UI/Button/ButtonSmall';

const CreatePostScreen = () => {
    const navi = useCustomNavigation();
    const [img, setImg] = useState(null);
    const [name, setName] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        const fetchProfile = async () => {
            const profile = await clientService.getUserProfile();
            if (profile) {
                // setName(profile.name);
                // setImg(profile.img);
                setName("Jessica")
                setImg("https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48.jpg");
            } else {
                setName("Jessica")
                setImg("https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48.jpg");
            }
        };
        fetchProfile();
    }, [])
    const selectImageHandler = async () => {
        console.log("Select Image");
    }
    const onChangeTitle = (text) => {
        setTitle(text);
    }
    const header = () => {
        return (
            <View style={styles.headerContainer}>
            <View>
                <Image source={{ uri: img }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            </View>
            <View style={styles.titleContainer}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>{name}</Text>
                </View>
                <Pressable onPress={()=> selectImageHandler()}>
                    <DynamicIcon name={"images"} size={22} color={"#343434"} library={"Entypo"}/>
                </Pressable>
            </View>
          </View>
        )
    }
    const body = () => {
        return (
            <View style={styles.bodyContainer}>
                <TextInput placeholder='Tiêu đề' style={{ fontSize: 18, fontWeight: "500", color:"#000000" }} value={title} onChangeText={(text)=> setTitle(text) }/>
                <TextInput multiline placeholder='Bạn đang nghĩ gì ?' style={styles.input} value={description} onChangeText={(text)=> setDescription(text)}/>
            </View>
        )
    }
    const footer = () => {
        return (
            <View style={{backgroundColor: "blue", width: 100, height: 50}}>
                
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <View style={styles.mergeContainer}>
            <View style={styles.headerContainer}>
                <View>
                    <Image source={{ uri: img }} style={{ width: 50, height: 50, borderRadius: 25 }} />
                </View>
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>{name}</Text>
                    </View>
                    <Pressable onPress={()=> selectImageHandler()}>
                        <DynamicIcon name={"images"} size={22} color={"#343434"} library={"Entypo"}/>
                    </Pressable>
                </View>
            </View>   
            <ScrollView style={styles.bodyContainer}>
                    <TextInput placeholder='Tiêu đề' style={{ fontSize: 18, fontWeight: "500", color:"#000000" }} value={title} onChangeText={(text)=> setTitle(text) }/>
                    <TextInput multiline placeholder='Bạn đang nghĩ gì ?' style={styles.input} value={description} onChangeText={(text)=> setDescription(text)}/>
            </ScrollView>
        </View>
      <View style={styles.footerContainer}>
        <ButtonSmall boder={false} text={"Post"}  />
      </View>
    </View>
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "100%",
        height: "100%"
    },
    mergeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        width: "100%"
    },
    bodyContainer: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "flex-start",
        // alignItems: "center",
        marginTop: 15,
        columnGap: 10,
        width: "100%",
        // flex:1
    },  
    headerContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: 10,
        // flex: 1,
    },
    footerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    titleContainer: {
        display: "flex",
        flex:1,
        // marginRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        fontSize: 16, 
        fontWeight: "500", 
        color:"#000000" ,
        height: "100%",
        borderColor: 'gray',
        paddingVertical: 4,
        textAlign:"justify",
        textAlignVertical: 'top', // for multiline text input to start at the top
      },
    
})