import { useReducer } from 'react';
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

// LIBS
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"

// INTERFACES
export interface userFormSignUp {
    name?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export const emailRegex =
    /^[\w.!#$%&'*+\/=?^_`{|}~-]+@\w(?:\w{0,61}\w)?(?:\.\w(?:[\w-]{0,61}\w)?)*$/gi;

const CreateUserFormSchema = yup.object().shape({
    email: yup.string().required("⚠ Email obrigatório").matches(emailRegex),
    name: yup.string().required("⚠ Nome obrigatório"),
    lastName: yup.string().required("⚠ Sobrenome obrigatório"),
    password: yup
        .string()
        .required("⚠ Senha obrigatória")
        .min(8, "No mínimo 8 caracteres"),
    confirmPassword: yup
        .string()
        .oneOf([null, yup.ref("password")], "⚠ As senhas precisam ser iguais"),
});

export function SignUp() {

    const navigate = useNavigate();

    const [safety, setSafety] = useReducer((state: boolean) => {
        return !state
    }, true)

    const [safetyConfirm, setSafetyConfirm] = useReducer((state: boolean) => {
        return !state
    }, true)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userFormSignUp>({
        resolver: yupResolver(CreateUserFormSchema),
    });

    const onSubmit = (data: userFormSignUp) => {
        navigate("/auth")
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container onSubmit={handleSubmit(onSubmit)}>
                    <RegistrationText>{words.registeTitle.pt}</RegistrationText>
                    <Form>

                        <FieldWrapper>
                            <Field.Root
                                label="Nome"
                                errorMessage={errors}
                                field='name'
                            >
                                <Field.Icon>
                                    <User />
                                </Field.Icon>
                                <Field.Input
                                    placeholder='Digite aqui seu nome'
                                    type="text"
                                    {...register("name")}
                                />
                            </Field.Root>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root
                                label="Sobrenome"
                                errorMessage={errors}
                                field='lastName'
                            >
                                <Field.Icon>
                                    <User />
                                </Field.Icon>
                                <Field.Input
                                    placeholder='Digite aqui seu sobrenome'
                                    type="text"
                                    {...register("lastName")}
                                />
                            </Field.Root>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root
                                label="E-mail"
                                errorMessage={errors}
                                field='email'
                            >
                                <Field.Icon>
                                    <EnvelopeSimple />
                                </Field.Icon>
                                <Field.Input
                                    placeholder='example@email.com'
                                    type="email"
                                    {...register("email")}
                                />
                            </Field.Root>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field.Root
                                label="Senha"
                                errorMessage={errors}
                                field='password'
                            >
                                <Field.Icon>
                                    <ShieldStar />
                                </Field.Icon>
                                <Field.Input
                                    placeholder='Digite aqui sua senha'
                                    type={safety ? "password" : "text"}
                                    {...register("password")}
                                />
                                <ChangeButton onClick={() => setSafety()} type="button">
                                    <Field.Icon>
                                        {safety ? <EyeSlash /> : <Eye />}
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
                                    type={safety ? "password" : "text"}
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
                            <Link to="/auth">
                                <Button
                                    larger="sm"
                                    variant='fill'
                                    type='button'
                                >
                                    Voltar
                                </Button>
                            </Link>
                            <Button
                                larger="sm"
                                variant='outline'
                                type='submit'
                            >
                                Confirmar
                            </Button>
                        </ButtonsWrapper>
                    </Form>
                </Container>
            </ThemeProvider>
        </>
    );
}
