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
export interface userFormUpdatePassword {
    password?: string;
    newPassword?: string;
    confirmPassword?: string;
}

const CreateUserFormSchema = yup.object().shape({
    password: yup
        .string()
        .required("⚠ Senha obrigatória")
        .min(8, "No mínimo 8 caracteres"),
    newPassword: yup
        .string()
        .required("⚠ Senha obrigatória")
        .min(8, "No mínimo 8 caracteres")
        .notOneOf([null, yup.ref("password")], "⚠ Não pode usar sua senha atual"),
    confirmPassword: yup
        .string()
        .oneOf([null, yup.ref("newPassword")], "⚠ As senhas precisam ser iguais"),
});

export function UpdatePassword() {

    const navigate = useNavigate();

    const [safetyCurrent, setSafetyCurrent] = useReducer((state: boolean) => {
        return !state
    }, true)

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
    } = useForm<userFormUpdatePassword>({
        resolver: yupResolver(CreateUserFormSchema),
    });

    const onSubmit = (data: userFormUpdatePassword) => {
        navigate("/profile")
    }

    return (
        <>
            <Reset />
            <ThemeProvider theme={theme}>
                <Container>
                    <ChangePasswordTitle>{words.changePassword.pt}</ChangePasswordTitle>
                    <Form onClick={handleSubmit(onSubmit)}>
                        <FieldWrapper>
                            <Field.Root
                                label="Senha atual"
                                errorMessage={errors}
                                field="password"
                            >
                                <Field.Icon>
                                    <ShieldStar />
                                </Field.Icon>
                                <Field.Input
                                    placeholder='Digite aqui sua senha'
                                    type={safetyCurrent ? "password" : "text"}
                                    {...register("password")}
                                />
                                <ChangeButton onClick={() => setSafetyCurrent()} type="button">
                                    <Field.Icon>
                                        {safetyCurrent ? <EyeSlash /> : <Eye />}
                                    </Field.Icon>
                                </ChangeButton>
                            </Field.Root>
                        </FieldWrapper>

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
                                field="confirmPassword"
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
                            <Button larger="lg" variant='outline' type='submit'>Confirmar</Button>
                            <Link to="/profile">
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

