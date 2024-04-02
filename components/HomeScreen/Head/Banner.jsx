import React, { useState, useEffect, useRef } from 'react';
import { FlatList, Image, Dimensions, View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box'

const { width } = Dimensions.get('window');
const images = [
    require('@/assets/images/homepage/banner1.png'),
    require('@/assets/images/homepage/banner2.png'),
    require('@/assets/images/homepage/banner1.png'),
];

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <SliderBox images={images} sliderBoxHeight='100%' autoplay circleLoop />
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

})