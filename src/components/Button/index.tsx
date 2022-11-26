import { ButtonHTMLAttributes, ReactNode, forwardRef, Ref } from "react";
import { ButtonWrapper } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    larger?: "sm" | "md" | "lg"; 
    variant?: "outline" | "fill";
} 

export const Button: React.FC<IButtonProps> = forwardRef((props: IButtonProps, ref: Ref<HTMLButtonElement>) => {
    return(
        <ButtonWrapper {...props} ref={ref}>
            {props.children}
        </ButtonWrapper>
    );
})