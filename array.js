import react from "react";
import { View,Text,StyleSheet } from "react-native";

export default function Array(){
    let cars = ['BMW','Benz','Volvo','Audi']
    return(
        <View>
            <Text>รถลำดับที่ 1 = {cars[0]}</Text>
            <Text>รถลำดับที่ 2 = {cars[1]}</Text>
            <Text>รถลำดับที่ 3 = {cars[2]}</Text>
            <Text>รถลำดับที่ 4 = {cars[3]}</Text>
        </View>
    )
}