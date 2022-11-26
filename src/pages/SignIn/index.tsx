import { useReducer } from 'react';
import { Reset } from 'styled-reset'
import {
    Logo,
    Container,
    WelcomeText,
    Form,
    FieldWrapper,
    ChangeButton,
    RememberButton,
    RememberPasswordText,
    ButtonsWrapper,
    ForgotPassword
} from './styles';
import { EnvelopeSimple, Eye, EyeSlash, ShieldStar, CheckSquare, Square } from "phosphor-react";
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme';
import { words } from './mock';
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';
export function SignIn() {
    const [safety, setSafety] = useReducer((state: boolean) => {
        return !state
    }, true)
    const [rememberPassword, setRememberPassword] = useReducer((state: boolean) => {
        return !state
    }, false)
    return (
        <>
            <Reset />
            <ThemeProvider theme={theme}>
                <Container>
                    <Logo />
                    <WelcomeText>{words.welcomeText.pt}</WelcomeText>
                    <Form>
                        <FieldWrapper>
                            <Field.Root label="E-mail" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <EnvelopeSimple />
                                </Field.Icon>
                                <Field.Input placeholder='example@email.com' type="email" />
                            </Field.Root>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root label="Senha" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <ShieldStar />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui sua senha' type={safety ? "password" : "text"} />
                                <ChangeButton onClick={() => setSafety()} type="button">
                                    <Field.Icon>
                                        {safety ? <EyeSlash /> : <Eye />}
                                    </Field.Icon>
                                </ChangeButton>
                            </Field.Root>
                            <RememberButton onClick={() => setRememberPassword()} type="button">
                                {rememberPassword ? <CheckSquare size={25} weight="bold" color='white' /> : <Square size={25} weight="bold" color='white' />}
                                <RememberPasswordText>Lembrar senha</RememberPasswordText>
                            </RememberButton>
                        </FieldWrapper>
                        <ButtonsWrapper>
                            <Button larger="sm" variant='outline' type='submit'>Entrar</Button>
                            <Button larger="sm" variant='fill' type='button'>Cadastra-se</Button>
                            <ForgotPassword type='button'>Esqueceu sua senha ?</ForgotPassword>
                        </ButtonsWrapper>
                    </Form>
                </Container>
            </ThemeProvider>
        </>
    );
}
