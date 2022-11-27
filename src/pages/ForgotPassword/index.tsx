import { useReducer } from 'react';
import {
    Container,
    ForgotPasswordText,
    Form,
    FieldWrapper,
    ChangeButton,
    ButtonsWrapper,
} from './styles';

import { Eye, EyeSlash, ShieldStar } from "phosphor-react";
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme';
import { words } from './mock';
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';

// LIBS
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"

// INTERFACES
export interface userFormForgotPassword {
    newPassword?: string;
    confirmPassword?: string;
}

const CreateUserFormSchema = yup.object().shape({
    newPassword: yup
        .string()
        .required("⚠ Senha obrigatória")
        .min(8, "No mínimo 8 caracteres"),
    confirmPassword: yup
        .string()
        .oneOf([null, yup.ref("newPassword")], "⚠ As senhas precisam ser iguais"),
});

export function ForgotPassword() {

    const navigate = useNavigate();

    const [safetyNew, setSafetyNew] = useReducer((state: boolean) => {
        return !state
    }, true)

    const [safetyConfirm, setSafetyConfirm] = useReducer((state: boolean) => {
        return !state
    }, true)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userFormForgotPassword>({
        resolver: yupResolver(CreateUserFormSchema),
    });

    const onSubmit = (data: userFormForgotPassword) => {
        navigate("/auth")
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container onClick={handleSubmit(onSubmit)}>
                    <ForgotPasswordText>{words.forgotPasswordTitle.pt}</ForgotPasswordText>
                    <Form>
                        <FieldWrapper>
                            <Field.Root
                                label="Nova senha"
                                errorMessage={errors}
                                field="newPassword"
                            >
                                <Field.Icon>
                                    <ShieldStar />
                                </Field.Icon>
                                <Field.Input
                                    placeholder='Digite aqui sua senha'
                                    type={safetyNew ? "password" : "text"}
                                    {...register("newPassword")}
                                />
                                <ChangeButton onClick={() => setSafetyNew()} type="button">
                                    <Field.Icon>
                                        {safetyNew ? <EyeSlash /> : <Eye />}
                                    </Field.Icon>
                                </ChangeButton>
                            </Field.Root>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root
                                label="Confirma senha"
                                errorMessage={errors}
                                field='confirmPassword'
                            >
                                <Field.Icon>
                                    <ShieldStar />
                                </Field.Icon>
                                <Field.Input
                                    placeholder='Digite aqui sua senha'
                                    type={safetyConfirm ? "password" : "text"}
                                    {...register("confirmPassword")}
                                />
                                <ChangeButton onClick={() => setSafetyConfirm()} type="button">
                                    <Field.Icon>
                                        {safetyConfirm ? <EyeSlash /> : <Eye />}
                                    </Field.Icon>
                                </ChangeButton>
                            </Field.Root>
                        </FieldWrapper>

                        <ButtonsWrapper>
                                <Button
                                    larger="lg"
                                    variant='outline'
                                    type='submit'
                                >
                                    Confirmar
                                </Button>
                            <Link to="/auth">
                                <Button
                                    larger="lg"
                                    variant='fill'
                                    type='button'
                                >
                                    Voltar
                                </Button>
                            </Link>
                        </ButtonsWrapper>
                    </Form>
                </Container>
            </ThemeProvider>
        </>
    );
}

