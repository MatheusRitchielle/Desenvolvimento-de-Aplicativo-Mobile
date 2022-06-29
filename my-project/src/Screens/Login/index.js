import { Container, Logo, Title, TextInfo, SpacingHeight, WrapperTextInfo } from "../Login/styles";
import exit from "../../../assets/exit.png"
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input"
import spacings from "../../Theme/spacings";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
    return (
        <Container>
            <LinearGradient
                colors={['#0FF', 'transparent']}
                style={{
                    position: "absolute", 
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "30%",
                }} />
            <Logo source={exit} />
            <Title>
                Login
            </Title>
            <Input placeholder={"Digite seu login"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"Digite sua senha"} />
            <WrapperTextInfo>
                <TextInfo>
                    Esqueceu a sua senha? Clique aqui!
                </TextInfo>
            </WrapperTextInfo>
            <ButtonPrimary>
                <TextButton>Entrar</TextButton>
            </ButtonPrimary>
            <WrapperTextInfo>
                <TextInfo>
                    Não possui cadastro? Cadastre-se aqui.
                </TextInfo>
            </WrapperTextInfo>
            <LinearGradient
                colors={['transparent', '#0FF']}
                style={{
                    position: "absolute", 
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "30%",
                }} />
        </Container>
    )
};

export default Login; 