import React from 'react';
import { View } from 'react-native';

export default function Ex12() {
  return (
    <View style={{ flex : 6 , flexDirection : 'row' }}>   
        <View style={{flex : 2 , backgroundColor: '#50E3C2'}} /> 
        <View style={{flex : 2 , backgroundColor: '#4A90E2'}} />
        <View style={{flex : 2 , backgroundColor: '#9013FE'}} />
    </View>
  );
}