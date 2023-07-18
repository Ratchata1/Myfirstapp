import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default function MyComponent(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTittle}>Hello My component</Text>
            <Text> style={styles.textPara}React native JavaScript Framework....</Text>
            <Text> style={{color:'purple',fontWeight:'bold'}}Contact React Native</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingTop:30,
        padding:20,
        backgroundColor:'lightred'
    },
    textTittle:{
        color:'darkgreen',  
        fontSize:20,
        fontWeight:'bold',
        marginTop:15
    },
    textPara:{
        fontSize:16,
    }
})