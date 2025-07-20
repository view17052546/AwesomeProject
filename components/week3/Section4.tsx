import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ padding : 0  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 20 }}>
                <View style={{ paddingLeft: 0 }}>
                    <Text style={{ color: "gray" }}>__________________________________________________</Text>
                    <Text style={{ fontSize: 20 }}>Hotel Description</Text>
                    <Text style={{ color: "gray" }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
                    <Text style={{ color: "gray" }}>__________________________________________________</Text>
                </View>
            </View>
        </View>    
    );
}
