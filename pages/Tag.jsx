import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'AfshinFxDarkTheme';
import TagComp from 'components/Tag/Tag';

const Tag = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Tag</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <TagComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Tag;
