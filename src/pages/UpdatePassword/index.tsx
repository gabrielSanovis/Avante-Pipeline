import { useReducer } from 'react';
import { Reset } from 'styled-reset'

import {
    Container,
    ChangePasswordTitle,
    Form,
    FieldWrapper,
    ChangeButton,
    ButtonsWrapper,
} from './styles';

import {  Eye, EyeSlash, ShieldStar } from "phosphor-react";
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme';
import { words } from './mock';
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';
export function UpdatePassword() {
    const [safetyCurrent, setSafetyCurrent] = useReducer((state: boolean) => {
        return !state
    }, true)
    
    const [safetyNew, setSafetyNew] = useReducer((state: boolean) => {
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
                    <ChangePasswordTitle>{words.changePassword.pt}</ChangePasswordTitle>
                    <Form>
                        <FieldWrapper>
                            <Field.Root label="Senha atual" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <ShieldStar />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui sua senha' type={safetyCurrent ? "password" : "text"} />
                                <ChangeButton onClick={() => setSafetyCurrent()} type="button">
                                    <Field.Icon>
                                        {safetyCurrent ? <EyeSlash /> : <Eye />}
                                    </Field.Icon>
                                </ChangeButton>
                            </Field.Root>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root label="Nova senha" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <ShieldStar />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui sua senha' type={safetyNew ? "password" : "text"} />
                                <ChangeButton onClick={() => setSafetyNew()} type="button">
                                    <Field.Icon>
                                        {safetyNew ? <EyeSlash /> : <Eye />}
                                    </Field.Icon>
                                </ChangeButton>
                            </Field.Root>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root label="Confirma senha" errorMessage="Mensagem de erro">
                                <Field.Icon>
                                    <ShieldStar />
                                </Field.Icon>
                                <Field.Input placeholder='Digite aqui sua senha' type={safetyConfirm ? "password" : "text"} />
                                <ChangeButton onClick={() => setSafetyConfirm()} type="button">
                                    <Field.Icon>
                                        {safetyConfirm ? <EyeSlash /> : <Eye />}
                                    </Field.Icon>
                                </ChangeButton>
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

