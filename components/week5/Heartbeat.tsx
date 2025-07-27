import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Heartbeat() {
    const [heart, setHeart] = useState(0);

    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <TouchableOpacity onPress={() => setHeart(heart + 1)}>
                    <FontAwesome name="heart" size={50} color="red" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, textAlign: "center" }}>{heart}</Text>
            </View>


        </View>

    );
}
