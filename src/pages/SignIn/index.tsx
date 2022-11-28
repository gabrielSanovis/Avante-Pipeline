// REACT
import { useReducer } from 'react';

// LIBS
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"

// ICONS
import { EnvelopeSimple, Eye, EyeSlash, ShieldStar, CheckSquare, Square } from "phosphor-react";

// MOCK
import { words } from './mock';

// STYLES
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
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme';

// COMPONENTS
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';

// INTERFACES
export interface userFormSignIn {
    email?: string;
    password?: string;
}

export const emailRegex =
    /^[\w.!#$%&'*+\/=?^_`{|}~-]+@\w(?:\w{0,61}\w)?(?:\.\w(?:[\w-]{0,61}\w)?)*$/gi;

const CreateUserFormSchema = yup.object().shape({
    email: yup.string().required("⚠ Email obrigatório").matches(emailRegex),
    password: yup
        .string()
        .required("⚠ Senha obrigatória")
        .min(8, "No mínimo 8 caracteres"),
});

export function SignIn() {
    const navigate = useNavigate()
    const [safety, setSafety] = useReducer((state: boolean) => {
        return !state
    }, true)

    const [rememberPassword, setRememberPassword] = useReducer((state: boolean) => {
        return !state
    }, false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userFormSignIn>({
        resolver: yupResolver(CreateUserFormSchema),
    });

    function onSubmit(data: userFormSignIn) {
        navigate("/dashboard")
    }

    return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Logo />
                    <WelcomeText>{words.welcomeText.pt}</WelcomeText>
                    <Form onSubmit={handleSubmit(onSubmit)} >
                        <FieldWrapper>
                            <Field.Root
                                label="E-mail"
                                errorMessage={errors}
                                field="email"
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
                                field="password"
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
                            <RememberButton onClick={() => setRememberPassword()} type="button">
                                {rememberPassword ? <CheckSquare size={25} weight="bold" color='white' /> : <Square size={25} weight="bold" color='white' />}
                                <RememberPasswordText>Lembrar senha</RememberPasswordText>
                            </RememberButton>
                        </FieldWrapper>
                        <ButtonsWrapper>

                            <Button
                                larger="sm"
                                variant='outline'
                                type='submit'
                            >
                                Entrar
                            </Button>

                            <Link to="/auth/sign-up">
                                <Button
                                    larger="sm"
                                    variant='fill'
                                    type='button'
                                >
                                    Cadastra-se
                                </Button>
                            </Link>
                            <Link to="/auth/forgot-password">
                                <ForgotPassword type='button'>Esqueceu sua senha ?</ForgotPassword>
                            </Link>
                        </ButtonsWrapper>
                    </Form>
                </Container>
            </ThemeProvider>
    );
}
