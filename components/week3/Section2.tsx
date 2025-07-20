import { FontAwesome } from "@expo/vector-icons";
import React from 'react';
import { Text, View } from 'react-native';
export default function Section2() {
    return (
        <View style={{ padding : 20 , borderRadius: 50/ 2, backgroundColor : "#FFCCCC", alignItems : "center" ,marginTop : -25 }}>
            
            <View style={{ flexDirection : "row",marginTop : 10 }}>
                <Text style={{ fontSize : 20 }}>Hilton San Francisco</Text>
            </View>
            {/* View ก้อนที่ 4 */}
            <View style={{ flexDirection : "row", justifyContent : "center", marginTop : 10}}>
                <View style={{ flexDirection : "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
                
            </View>
            {/* View ก้อนที่ 5 */}
            <View style={{ marginTop : 10 , justifyContent : "center"}}>
                <Text  style={{ fontSize : 20 , color : 'black'}} >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>    
    );
}