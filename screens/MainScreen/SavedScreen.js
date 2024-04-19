import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import Header from '@/components/SaveScreen/Header';
import CategoryFood from '@/components/SaveScreen/CategoryFood';
import ListFoodSave from '@/components/SaveScreen/ListFoodSave';

const SavedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CategoryFood />
      <ListFoodSave />
      <TouchableOpacity style={styles.add}>
        <Ionicons name="add-circle" size={30} color="#cd6163" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
    marginTop: 20,
    // paddingHorizontal: 5,
    marginHorizontal: 20
  },
  add: {
    zIndex: 1,
    position: 'absolute',
    top: 180,
    right: -10,
  }
});
