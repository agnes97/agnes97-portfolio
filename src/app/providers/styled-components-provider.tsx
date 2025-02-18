'use client';

import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { GlobalStyle } from '../styles/global.styled';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/styled-component-registry';
import { Palette, darkTheme, lightTheme } from '../styles/theme.styled';
import PageLayout from '../styles/page-layout';
import { useCookies } from 'next-client-cookies';
import { FlexProps } from '../components/flex/Flex';

const COLOR_THEME_OPTIONS = ['light', 'dark'] as const;
export type ColorTheme = (typeof COLOR_THEME_OPTIONS)[number];

const defaultTheme: ColorTheme = 'light';
const isValidTheme = (theme: unknown): theme is ColorTheme =>
  COLOR_THEME_OPTIONS.includes(theme as ColorTheme);

export const themes: {
  [key in ColorTheme]: {
    color: Palette;
  };
} = {
  dark: {
    color: darkTheme,
  },
  light: {
    color: lightTheme,
  },
};

export type CurrentTheme = (typeof themes)[ColorTheme];

type ThemeContext = {
  currentTheme: CurrentTheme;
  currentThemeVariant: ColorTheme;
  updateTheme: () => void;
  updateCustomPageLayout: (value: FlexProps) => void;
};
const ThemeContext = createContext<ThemeContext>({
  currentTheme: themes[defaultTheme],
  currentThemeVariant: defaultTheme,
  updateTheme: () => {},
  updateCustomPageLayout: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const StyledComponentsProvider: FC<PropsWithChildren> = ({ children }) => {
  const cookies = useCookies();

  const [currentTheme, setCurrentTheme] = useState<ColorTheme>(
    isValidTheme(cookies.get('currentTheme'))
      ? (cookies.get('currentTheme') as ColorTheme)
      : defaultTheme
  );

  const updateTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    setCurrentTheme(newTheme);
    cookies.set('currentTheme', newTheme);
  };

  const theme = useMemo(() => themes[currentTheme], [currentTheme]);

  const [customPageLayout, setCustomPageLayout] = useState<
    FlexProps | undefined
  >(undefined);
  const updateCustomPageLayout = (value: FlexProps) => {
    setCustomPageLayout(value);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        currentThemeVariant: currentTheme,
        updateTheme,
        updateCustomPageLayout,
      }}
    >
      <ThemeProvider theme={theme}>
        <StyledComponentsRegistry>
          <body>
            <GlobalStyle />
            <PageLayout customStyle={customPageLayout}>{children}</PageLayout>
          </body>
        </StyledComponentsRegistry>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default StyledComponentsProvider;
