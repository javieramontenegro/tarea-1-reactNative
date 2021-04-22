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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

const App = () => {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,

      padding: 10,
    },

    container: {
      width: '100%',
      height: '100%',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'center',
      backgroundColor: 'pink',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 10,
    },
    containerRowName: {
      width: '100%',
      height: 'auto',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      alignItems: 'center',
    },
    imgAvatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    rowName: {
      width: '100%',
      height: 'auto',
      flex: 1,
      flexDirection: 'column',
    },
    age: {
      fontSize: 20,
      color: 'white',
    },
    bio: {
      fontSize: 20,
      color: 'gray',
    },
    containerDes: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    },
    description: {
      width: '50%',

      fontSize: 20,
      color: 'white',
    },
  });
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.layout}>
          <View style={styles.container}>
            <View style={styles.containerRowName}>
              <View style={styles.rowName}>
                <Text style={styles.title}>Javiera Montenegro</Text>
                <Text style={styles.age}>28</Text>
              </View>
              <Image
                source={{uri: 'https://picsum.photos/seed/picsum/200'}}
                style={styles.imgAvatar}
              />
            </View>
            <View style={styles.containerRowName}>
              <View style={styles.rowName}>
                <Text style={styles.bio}>Bio</Text>
                <Text style={styles.age}>Animadora digital / Front- end</Text>
              </View>
            </View>
            <View style={styles.containerRowName}>
              <View style={styles.rowName}>
                <Text style={styles.bio}>Descripción</Text>
                <View style={styles.containerDes}>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <Text style={styles.description}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
