import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 600, width: 300, backgroundColor: 'grey' }} >
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                <View style={{ marginTop: 35 }}>
                    <View style={{ height: 50, width: 250, backgroundColor: 'white', alignSelf: 'center', borderRadius: 25 }} />
                    <View style={{ marginTop: 20, height: 50, width: 250, backgroundColor: 'white', alignSelf: 'center', borderRadius: 25 }} />
                </View>
                <Pressable  color='black' style={buttonStyle.input}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white' }}>Entrar</Text>
                </Pressable>
                <Pressable  color='black' style={buttonStyle.input}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white' }}>Criar Conta</Text>
                </Pressable>
            </View>
        </View>
    );
}

const buttonStyle = StyleSheet.create ({
    input: {
        alignSelf: 'center',
        marginTop: 20,
        height: 45,
        width: 200,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems: 'center',
        
    }      
})

export default Login;