
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Heading from "./components/Heading/Heading";
import Text from "./components/Text/Text";
import Menu from "./widgets/Menu/Menu";
import { LangType } from "./widgets/Menu/types";
import { links } from "./widgets/Menu/config";
import { ThemeContext, ThemeProvider } from 'styled-components';
import {
    light as lightBase,
    dark as darkBase,
    PancakeTheme
} from './theme';

// customize light theme
const light: PancakeTheme = lightBase;
// light.colors.text = '#222';
// light.card.background = '#f4f4f4';

// customize dark theme
const dark: PancakeTheme = darkBase;
// dark.colors.text = '#444';
// dark.card.background = '#111';

const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

const noop = function () { console.log('noop') };

const defaultProps = {
    account: "0xbdda50183d817c3289f895a4472eb475967dc980",
    login: noop,
    logout: noop,
    isDark: false,
    toggleTheme: noop,
    langs,
    setLang: noop,
    currentLang: "EN",
    cakePriceUsd: 0.023158668932877668,
    links,
    profile: {
        username: "pancakeswap",
        image: "https://pancakeswap.finance/images/nfts/blueberries-preview.png",
        profileLink: "/profile",
        noProfileLink: "/no-profile",
    }
};


// This hook is used to simulate a props change, and force a re rendering
const useProps = () => {
    const [props, setProps] = useState(defaultProps);

    useEffect(() => {
        const interval = setInterval(() => {
            setProps(defaultProps);
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return props;
};

export const App: React.FC = () => {
    let [theme, setTheme] = useState(useContext(ThemeContext));
    if (!theme) {
        theme = light;
        setTheme(theme);
    }
    const props = useProps();
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Menu {...props}>
                    <div>
                        <Heading as="h1" mb="8px">
                            Page body
                        </Heading>
                        <Text as="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut
                        </Text>
                    </div>
                </Menu>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
