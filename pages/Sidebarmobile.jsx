import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'AfshinFxDarkTheme';
import SidebarMobileComp from 'components/SidebarMobile/SidebarMobile';

const Sidebarmobile = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Sidebar-mobile</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <SidebarMobileComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Sidebarmobile;
