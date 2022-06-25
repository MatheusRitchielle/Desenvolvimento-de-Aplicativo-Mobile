
import React from "react";
import { View } from "react-native";
import { ButtonText, Container, Login, PressableLogin, Title, InnerText } from "./styles";

const Test = () => {
  return (
    <Container>
      <Login>
        <Title>
          Login
        </Title>
        <View style={{ marginTop: 20 }}>
          <InnerText placeholder="username"  />
          <InnerText placeholder="password"  />
          <PressableLogin>
            <ButtonText>
              Login
            </ButtonText>
          </PressableLogin>
        </View>
      </Login>
    </Container>
  );
};

export default Test;