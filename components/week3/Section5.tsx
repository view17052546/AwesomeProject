import React from "react";
import { View } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
  return (
    <View style={{ margin : 20 , padding : 10}}>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="Wifi" name="wifi" size={30} color="orange" />
        <MyIcon title="Coffee" name="coffee" size={30} color="orange" />
        <MyIcon title="Bath" name="bath" size={30} color="orange" />
        <MyIcon title="Car" name="car" size={30} color="orange" />
        <MyIcon title="Paw" name="paw" size={30} color="orange" />

      </View>
      
    </View>
  );
}