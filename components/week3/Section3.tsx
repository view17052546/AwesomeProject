import React from 'react';
import { Text, View } from 'react-native';
export default function Section3() {
    return (
        <View style={{ padding : 30}}>
            {/* View ก้อนที่ 2 */}
            <View style={{ width: 50, height: 50, borderRadius: 50 / 2, backgroundColor: "#FF6666", alignItems: "center", justifyContent: "center", marginTop: -25 }}>
                <Text style={{ fontSize : 20, color : 'black' }}> 9.5 </Text>              
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ marginTop : -50, justifyContent : "center"}}>
                <Text style={{ fontSize : 20, color : '#FF6666' }}>           Excellent </Text>
                <Text style={{ fontSize : 20, color : 'gray' }}>           See 801 reviews </Text>
            </View>
        </View>    
    );
}
