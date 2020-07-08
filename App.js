import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Home} from './src/HomeScreen'
import {AddUser} from './src/AddUser'

const Stack = createStackNavigator()
const myOpts={
  title:'',
  headerTintColor:'white',
  headerStyle:{
    backgroundColor:'#1707a8'
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={myOpts} />
          <Stack.Screen name='Create user' component={AddUser} options={{...myOpts, title:'add user'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c8c3',
    // marginTop:20,
    paddingTop:10
  },
});
