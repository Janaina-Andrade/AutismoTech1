import { } from 'expo-status-bar';
import {  StatusBar,SafeAreaView } from 'react-native';
import React from 'react';
import Persona from './src/telas/persona';
import Status from './src/telas/status';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Persona/>
     
     
    </SafeAreaView>
  );
}

