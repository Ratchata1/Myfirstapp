import react from "react";
import { View,Text,StyleSheet } from "react-native";

export default function Variables(){
    let x = 10
    let y = 18.6543
    let z = -12
    const name = 'Likit'
    const tel = ''

    return(
        <View>
            <Text>แสดงค่าจากตัวแปร</Text>
            <Text>X = {x}</Text>
            <Text>Y = {y}</Text>
            <Text>Z = {z}</Text>
            <Text>Name = {name}</Text>
            <Text>Tel = {tel}</Text>
        </View>
    )
}