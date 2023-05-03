import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'AfshinFxDarkTheme';
import IndexComp from 'components/Index/Index';

const Home = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>AfshinFX</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="AfshinFX" key="title" />
            <meta name="description" content="Description goes here" />
            <meta name="keywords" content="UI designer , Freelancer , Logo animation , UI/UX designer , Self-employed , Animator , Web , Phone , Web3 , Mobile , App , After Effects , Figma , Concept artist , Motion graphics , Quest , Photoshop , Illustrator , Adobe Illustrator , Graphic designer , Creative design , Redesign , Branding , Rebranding , Character design , Motion design , Graphic design , Visual design , Animation , Logo design , Artistic , User interface , NFT , User experience , Product design "></meta>
          </Head>
          <main>
            <IndexComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Home;
