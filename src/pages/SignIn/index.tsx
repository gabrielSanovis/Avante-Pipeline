import { Reset } from 'styled-reset'
import { Logo, Container, WelcomeText } from './styles';
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme';
import { words } from './mock';
export function SignIn() {
    return (
        <>
            <Reset />
            <ThemeProvider theme={theme}>
                <Container>
                    <Logo />
                    <WelcomeText>{words.welcomeText.pt}</WelcomeText>
                </Container>
            </ThemeProvider>
        </>
    );
}
