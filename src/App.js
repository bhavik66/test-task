/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';

import Test from './components/Test'

const data = [
  {
    name: 'Bhavik Charola',
    age: 21,
    salary: 20000,
  },
  {
    name: 'Bhavik Patel',
    age: 26,
    salary: 40000,
  },
]

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item, index}) => <Test data={item} />}
          keyExtractor={(item, index) => `${index}`}
          style={{flex: 1}} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
