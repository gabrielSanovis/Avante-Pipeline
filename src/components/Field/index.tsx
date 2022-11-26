import { InputHTMLAttributes, Ref, forwardRef, ReactNode } from "react";
import { ErrorInput, FieldInputWrapper, FieldArea, FieldHeader, Input, Label, Icon } from "./styles";

export interface FieldProps {
    children: ReactNode;
    label?: string;
    errorMessage?: any;
}

const FieldRoot = ({ label, errorMessage, children }: FieldProps) => {
    return (
        <FieldArea>
            <FieldHeader>
                <Label>{label}</Label>
                <ErrorInput>{errorMessage}</ErrorInput>
            </FieldHeader>
            <FieldInputWrapper>
                {children}
            </FieldInputWrapper>
        </FieldArea>
    );
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> { }

const FieldInput = forwardRef((props: IInputProps, ref: Ref<HTMLInputElement>) => {
    return (
        <Input
            {...props}
            ref={ref}
        />
    );
})

export interface IIconProps {
    children: ReactNode;
}

function FieldIcon({ children }: IIconProps) {
    return <Icon>{children}</Icon>;
}

export const Field = {
    Root: FieldRoot,
    Input: FieldInput,
    Icon: FieldIcon
}