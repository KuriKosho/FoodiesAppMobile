import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '@/components/SaveScreen/Header';

const SavedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,
    paddingHorizontal: 10
  },
});
