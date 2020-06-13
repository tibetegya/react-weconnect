/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
// import App from 'next/app'
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../src/redux';
import * as themes from '../src/utils/themes';

const MyApp = ({ Component, pageProps }) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={themes.defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </ReduxProvider>
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
