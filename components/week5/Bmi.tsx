import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Bmi() { 
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');   
    const [body , setBody] = useState('0');   

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        const w = parseFloat(weight);
        const h = parseFloat(height);  
        let output = (w/ (h/100 * h/100));
        setBmi(output.toFixed(2));
    let description = "";
    if (output < 18.5)
        description = "Underweight";
    else if (output >= 18.5 && output <= 24.99)
        description = "Normal";
    else if (output >= 25 && output <= 29.99)
        description = "Overweigh";
    else if (output >= 30 && output <= 35.99)
        description = "Obese";
    else
        description = "Extremely Obese";
    setBody(description);
    
    };

    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{ backgroundColor: "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20
}}>
                <Text>Weight (kg.)</Text>
                <TextInput 
                onChangeText={ (newWeight) => setWeight(newWeight) }
                value={ weight }
                style={{ fontSize : 20 }} 
                keyboardType="numeric" 
                placeholder="Input your weight"/>
            </View>
            {/* แถวที่ 2 */}
            <View style={{ backgroundColor: "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20
}}>
                <Text>Height (cm.)</Text>
                <TextInput 
                onChangeText={ (newHeight) => setHeight(newHeight) }
                value={ height }
                style={{ fontSize : 20 }} 
                keyboardType="numeric" 
                placeholder="Input your height"/>
            </View>
            {/* แถวที่ 3 */}
            <View style ={{flexDirection : "row", marginVertical:20}}>
                <View style={{ backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center" ,marginRight:10}}>
                    <Text>{bmi}</Text>
                </View>
                <View style={{ backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:10}}>
                    <Text>{body}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            <TouchableOpacity onPress={onPressButton}>
            <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
            <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
            Calculate
            </Text>
            </View>
            </TouchableOpacity>
          
        </View>       
    );
}
