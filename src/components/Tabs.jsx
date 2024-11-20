import { Children } from "react";

export default function Tabs({ children, button, buttonsContainer='menu' }) {
    const ButtonContainer = buttonsContainer;
    return (
        <>
            <ButtonContainer>{button}</ButtonContainer>
            {children}
        </>
    );
}