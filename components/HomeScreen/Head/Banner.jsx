import React, { useState, useEffect, useRef } from 'react';
import { FlatList, Image, Dimensions, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window');
const images = [
    require('@/assets/images/homepage/banner1.png'),
    require('@/assets/images/homepage/banner2.png'),
    require('@/assets/images/homepage/banner1.png'),
];

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <Swiper loop={true}
                    autoplay={true}
                    autoplayTimeout={2}>
                {images.map((image, index) => {
                    return (
                        <View key={index} style={styles.slide}>
                            <Image
                                source={image}
                                style={{ width: width, height: 100 }}
                            />
                        </View>
                    )
                })}
            </Swiper>
        </View>
    );
};

export default Banner;
const styles = StyleSheet.create({
    bannerContainer: {
        marginHorizontal: 15,
        marginBottom: 15,
        height: 100,
        borderRadius: 15,
        overflow: 'hidden',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
      },

})