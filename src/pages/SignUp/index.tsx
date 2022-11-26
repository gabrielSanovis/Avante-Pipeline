import { useReducer } from 'react';
import { Reset } from 'styled-reset'
import {
    Container,
    RegistrationText,
    Form,
    FieldWrapper,
    ChangeButton,
    ButtonsWrapper,
} from './styles';
import { EnvelopeSimple, Eye, EyeSlash, ShieldStar, User } from "phosphor-react";
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme';
import { words } from './mock';
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';
export function SignUp() {
    const [safety, setSafety] = useReducer((state: boolean) => {
        return !state
    }, true)
    const [safetyConfirm, setSafetyConfirm] = useReducer((state: boolean) => {
        return !state
    }, true)
    return (
        <>
            <Reset />
            <ThemeProvider theme={theme}>
                <Container>
                    <RegistrationText>{words.registeTitle.pt}</RegistrationText>
                    <Form>
                        <FieldWrapper>
                            <Field.Root label="Nome" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <User />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui seu nome' type="email" />
                            </Field.Root>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field.Root label="Sobrenome" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <User />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui seu sobrenome' type="email" />
                            </Field.Root>
                        </FieldWrapper>
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
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root label="Confirma senha" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <ShieldStar />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui sua senha' type={safety ? "password" : "text"} />
                                <ChangeButton onClick={() => setSafetyConfirm()} type="button">
                                    <Field.Icon>
                                        {safetyConfirm ? <EyeSlash /> : <Eye />}
                                    </Field.Icon>
                                </ChangeButton>
                            </Field.Root>
                        </FieldWrapper>

                        <ButtonsWrapper>
                            <Button larger="sm" variant='fill' type='button'>Voltar</Button>
                            <Button larger="sm" variant='outline' type='submit'>Confirmar</Button>
                        </ButtonsWrapper>
                    </Form>
                </Container>
            </ThemeProvider>
        </>
    );
}
