import { useReducer } from 'react';
import { Reset } from 'styled-reset'
import {
    Container,
    ChangeProfileTitle,
    Form,
    FieldWrapper,
    WarningText,
    ButtonsWrapper,
} from './styles';
import { EnvelopeSimple, User, Phone } from "phosphor-react";
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme';
import { words } from './mock';
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';
import { emailRegex } from '../SignIn';

// LIBS
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"
import { userFormSignUp } from '../../@types';

const CreateUserFormSchema = yup.object().shape({
    email: yup.string().matches(emailRegex),
    name: yup.string(),
    lastName: yup.string(),
    nickname: yup.string(),
    numberPhone: yup.string()
});

export function ChangeProfile() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userFormSignUp>({
        resolver: yupResolver(CreateUserFormSchema),
    });

    const onSubmit = (data: userFormSignUp) => {
        navigate("/profile")
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <ChangeProfileTitle>{words.profileTitle.pt}</ChangeProfileTitle>
                    <WarningText>Antes de confirma preencha no minimo um campo*</WarningText>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <FieldWrapper>
                            <Field.Root
                                label="Apelido"
                                errorMessage={errors}
                                field='nickname'
                            >
                                <Field.Icon>
                                    <User />
                                </Field.Icon>
                                <Field.Input
                                    placeholder='Digite aqui seu apelido'
                                    type="text"
                                    {...register("nickname")}
                                />
                            </Field.Root>
                        </FieldWrapper>

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
                                label="Telefone"
                                errorMessage={errors}
                                field='numberPhone'
                            >
                                <Field.Icon>
                                    <Phone />
                                </Field.Icon>
                                <Field.Input
                                    placeholder='(81) 91234-5678'
                                    type={"tel"}
                                    {...register("numberPhone")}
                                />

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
