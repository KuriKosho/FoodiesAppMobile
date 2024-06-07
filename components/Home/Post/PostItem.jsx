import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function PostItem({ name, content, timeOnl, avatar, image, like, share, save }) {
    const [likesCount, setLikesCount] = useState(parseInt(like));
    const [savesCount, setSavesCount] = useState(parseInt(save));
    const [sharesCount, setSharesCount] = useState(parseInt(share));

    const [likeColor, setLikeColor] = useState('black');
    const [saveColor, setSaveColor] = useState('black');
    const [shareColor, setShareColor] = useState('black');
    const [isFollowed, setIsFollowed] = useState(false);
    const followHandler = () => {
        setIsFollowed(!isFollowed);
    }
    return (
        <View style={styles.container}>
            <View style={styles.headPost}>
                <View style={{ position: "relative" }}>
                    <Image source={{ uri: avatar }} style={styles.avatarStyles} />
                    {isFollowed ? <FontAwesome onPress={followHandler} style={{ position: "absolute", bottom: 0, right: -7, zIndex: 1 }} name="check-circle" size={20} color="#e50000" /> : <Entypo onPress={followHandler} style={{ position: "absolute", bottom: 0, right: -7, zIndex: 1 }} name="circle-with-plus" size={20} color="#e50000" />}
                    {/* <Entypo style={{ position: "absolute", bottom: 0, right: -7, zIndex: 1 }} name="circle-with-plus" size={20} color="#e50000" /> */}
                    {/* <FontAwesome style={{ position: "absolute", bottom: 0, right: -7, zIndex: 1 }} name="check-circle" size={20} color="#e50000" /> */}
                </View>
                <View style={styles.nameTime}>
                    <Text style={styles.nameStyles}>{name}</Text>
                    <Text style={styles.timeStyles}>{timeOnl}</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.contentStyles}>{content}</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image source={image} style={styles.imgStyles} />
            </View>
            <View style={styles.interactContainer}>
                <TouchableOpacity onPress={() => {
                    setLikesCount(likeColor === 'black' ? likesCount + 1 : likesCount - 1);
                    setLikeColor(likeColor === 'black' ? 'red' : 'black');
                }}>
                    <Text style={{ fontSize: 15 }}>
                        <AntDesign name="like1" size={15} color={likeColor} /> {likesCount} Likes
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setSavesCount(saveColor === 'black' ? savesCount + 1 : savesCount - 1);
                    setSaveColor(saveColor === 'black' ? 'green' : 'black');
                }}>
                    <Text style={{ fontSize: 15 }}>
                        <Ionicons name="copy" size={15} color={saveColor} /> {savesCount} Saves
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setSharesCount(shareColor === 'black' ? sharesCount + 1 : sharesCount - 1);
                    setShareColor(shareColor === 'black' ? 'blue' : 'black');
                }}>
                    <Text style={{ fontSize: 15 }}>
                        <Ionicons name="share" size={15} color={shareColor} /> {sharesCount} Shares
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        backgroundColor: '#E4E9F2',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 5,
    },
    headPost: {
        flexDirection: 'row',
    },
    nameTime: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    avatarStyles: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
    },
    nameStyles: {
        fontSize: 15,
        fontWeight: '600',
    },
    timeStyles: {
        fontSize: 10,
    },
    contentContainer: {
        marginVertical: 15,
    },
    contentStyles: {
        fontWeight: '500',
    },
    imgContainer: {},
    imgStyles: {
        height: 180,
        width: '100%',
        resizeMode: 'cover',
        marginBottom: 15,
    },
    interactContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
});
