import GlobalStyles, { ColorsStyles } from '@globalStyles';
import defaultTheme from '@theme/default';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ColorsStyles />
    </ThemeProvider>
    <Component {...pageProps} />
  </>
);

export default MyApp;
