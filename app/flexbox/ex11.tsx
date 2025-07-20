import React from 'react';
import { View } from 'react-native';

export default function Ex11() {
  return (
    <View style={{ flex : 6 , flexDirection : 'column' }}>   
        <View style={{flex : 3 , backgroundColor: '#4A90E2'}} /> 
        <View style={{flex : 3 , backgroundColor: '#50E3C2'}} />
    </View>
  );
}