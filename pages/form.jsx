import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'AfshinFxDarkTheme';
import FormComp from 'components/Form/Form';

const Form = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>form</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <FormComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Form;
