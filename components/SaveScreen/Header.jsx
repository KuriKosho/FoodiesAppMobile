import { StyleSheet, Text, View } from 'react-native';
import Category from '@/components/UI/Category';
import React from 'react';
import SearchTool from '@/components/UI/SearchTool';
import ButtonNormal from '../UI/Button/ButtonNormal';
import ButtonCategory from '../UI/Button/ButtonCategory';

export default function Header() {
    return (
        <View>
            <Category title={"Pantry"} style={styles.text} showAll={"Shopping List"} />
            <SearchTool style={styles.search} />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#EB3830'
    },
    search: {
        width: '100%'
    },

});
