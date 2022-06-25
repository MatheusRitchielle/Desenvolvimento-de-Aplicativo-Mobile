import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Login = styled.View`
height: 300px;
    width: 300px;
    background-color: #7B68EE;
    border-radius: 10;
`;

export const Title = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
`;


export const InnerText = styled.TextInput`
    margin-top: 10px;
    height: 50px;
    width: 270px;
    font-size: 16px;
    padding-left: 15px;
    background-color: #E6E6FA;
    align-self: center;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    padding-bottom: 8px;
`;

export const PressableLogin = styled.Pressable`
    height: 50px;
    width: 120px;
    background-color: #FF69B4;
    align-self: center;
    margin-top: 22px;
    border-radius: 50;
    font-weight: bold;
    align-items: center;
    justify-content: center;
`;