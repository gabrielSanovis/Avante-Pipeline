import { useReducer } from 'react';
import { Reset } from 'styled-reset'
import {
    Logo,
    Container,
    WelcomeText,
    FieldWrapper,
    ChangeButton
} from './styles';
import { EnvelopeSimple, Eye, EyeSlash, ShieldStar } from "phosphor-react";
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme';
import { words } from './mock';
import { Field } from '../../components/Field';
export function SignIn() {
    const [safety, setSafety] = useReducer((state: boolean) => {
        return !state
    }, true)
    return (
        <>
            <Reset />
            <ThemeProvider theme={theme}>
                <Container>
                    <Logo />
                    <WelcomeText>{words.welcomeText.pt}</WelcomeText>

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
                            <ChangeButton onClick={() => setSafety()}>
                                <Field.Icon>
                                    {safety ? <EyeSlash /> : <Eye />}
                                </Field.Icon>
                            </ChangeButton>
                        </Field.Root>
                    </FieldWrapper>
                </Container>
            </ThemeProvider>
        </>
    );
}
