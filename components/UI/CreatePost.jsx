import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import clientService from '@/service/client.service';
import { useCustomNavigation } from '@/utils/method/useCustomNavigation';

const CreatePost = () => {
    const navi = useCustomNavigation();
    const [img, setImg] = useState(null);
    useEffect(() => {
        const fetchImg = async () => {
            const img = await clientService.getUserProfile();
            setImg(img.profileImg);
        };
        fetchImg();
    }, [])
    const handleShowPost = () => {
        navi.goToScreen("Create Post");
    }
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: img }} style={{ width: 50, height: 50, borderRadius: 25 }} />
      </View>
      <Pressable style={styles.postContainer} onPress={()=>handleShowPost() } >
        <Text style={{ fontSize: 16, fontWeight: "400" }}> Bạn đang nghĩ gì ?</Text>
      </Pressable>
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 15,
        borderRadius: 15,
        columnGap: 10
    },
    postContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingStart: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#676767",
        flex: 1,
        height: 50
    },
    textPost: {
        fontSize: 16,
        fontWeight: "500"
    }
})