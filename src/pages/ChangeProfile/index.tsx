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
import { EnvelopeSimple, User, Phone } from "phosphor-react";
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme';
import { words } from './mock';
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';
export function ChangeProfile() {
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <RegistrationText>{words.profileTitle.pt}</RegistrationText>
                    <Form>

                        <FieldWrapper>
                            <Field.Root label="Apelido" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <User />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui seu apelido' type="text" />
                            </Field.Root>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root label="Nome" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <User />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui seu nome' type="text" />
                            </Field.Root>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root label="Sobrenome" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <User />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui seu sobrenome' type="text" />
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
                            <Field.Root label="Telefone" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <Phone />
                                </Field.Icon>
                                <Field.Input placeholder='(81) 91234-5678' type={"tel"} />
                                
                            </Field.Root>
                        </FieldWrapper>

                        <ButtonsWrapper>
                            <Button larger="lg" variant='outline' type='submit'>Confirmar</Button>
                            <Button larger="lg" variant='fill' type='button'>Voltar</Button>
                        </ButtonsWrapper>
                    </Form>
                </Container>
            </ThemeProvider>
        </>
    );
}
