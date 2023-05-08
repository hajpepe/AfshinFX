
import React from 'react';
import { styled } from '@mui/material/styles';
import SidebarMobileSmall from 'components/SidebarMobileSmall/SidebarMobileSmall';
import MenuTablet from 'components/MenuTablet/MenuTablet';
import MenuDesktop from 'components/MenuDesktop/MenuDesktop';
import Sidebar2 from 'components/Sidebar2/Sidebar2';
import useIndex from 'components/Index/useIndex';
import Lottie from 'components/LottieAnimation/animation';
import { useState, useEffect } from 'react';
import Loading from 'components/loading/loading';
import { motion } from 'framer-motion';

const IndexDesktop1080 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  backgroundColor:
    data.currentVariant === 'Indextablet720'
      ? 'unset'
      : data.currentVariant === 'IndexMobile390'
      ? 'unset'
      : data.currentVariant === 'Indexmobile375'
      ? 'unset'
      : `rgba(255, 255, 255, 1)`,
      display: `flex`,
      position: `relative`,
      isolation: `isolate`,
      flexDirection: `column`,
      height: '100vh',
      width: '100%',
       justifyContent: `flex-start`,
       alignItems:
    data.currentVariant === 'Indextablet720'
      ? `center`
      : data.currentVariant === 'IndexMobile390'
      ? `center`
      : data.currentVariant === 'Indexmobile375'
      ? `flex-end`
      : `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  background:
    data.currentVariant === 'Indextablet720'
      ? `linear-gradient(89.76deg, rgba(24, 68, 67, 1) 1.3879942070201856%, rgba(15, 36, 39, 1) 98.43783570102971%)`
      : data.currentVariant === 'IndexMobile390'
      ? `linear-gradient(89.85deg, rgba(22, 52, 54, 1) 2.139213583980491%, rgba(53, 95, 91, 1) 99.79347493044568%)`
      : data.currentVariant === 'Indexmobile375'
      ? `linear-gradient(89.61deg, rgba(24, 68, 67, 1) 1.825104593741272%, rgba(15, 36, 39, 1) 98.16393353125423%)`
      : 'unset',
}));

const Page = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === 'Indextablet720'
      ? `column`
      : data.currentVariant === 'IndexMobile390'
      ? `column`
      : data.currentVariant === 'Indexmobile375'
      ? `column`
      : `row`,
  justifyContent: `flex-start`,
  alignItems:
    data.currentVariant === 'Indextablet720'
      ? `center`
      : data.currentVariant === 'IndexMobile390'
      ? `flex-end`
      : data.currentVariant === 'Indexmobile375'
      ? `flex-end`
      : `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const SidebarMobileSmall1 = styled(SidebarMobileSmall, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  alignSelf: `stretch`,
  width:
    data.currentVariant === 'Indextablet720'
      ? 'unset'
      : data.currentVariant === 'IndexMobile390'
      ? 'unset'
      : data.currentVariant === 'Indexmobile375'
      ? 'unset'
      : `375px`,
  margin: `0px`,
}));



const MenuTablet1 = styled(MenuTablet, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  alignSelf: `stretch`,
  margin: `0px`,
  height:
    data.currentVariant === 'Indextablet720'
      ? `900px`
      : data.currentVariant === 'IndexMobile390'
      ? `900px`
      : data.currentVariant === 'Indexmobile375'
      ? `900px`
      : 'unset',
}));

const MenuDesktop1 = styled(MenuDesktop, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  width:
    data.currentVariant === 'Indextablet1024'
      ? 'unset'
      : data.currentVariant === 'Indextablet720'
      ? 'unset'
      : data.currentVariant === 'IndexMobile390'
      ? 'unset'
      : data.currentVariant === 'Indexmobile375'
      ? 'unset'
      : `366px`,
  height: data.currentVariant === 'Indextablet1024' ? 'unset' : `1080px`,
  margin: `0px`,
  alignSelf:
    data.currentVariant === 'Indextablet1024'
      ? `stretch`
      : data.currentVariant === 'Indextablet720'
      ? `stretch`
      : data.currentVariant === 'IndexMobile390'
      ? `stretch`
      : data.currentVariant === 'Indexmobile375'
      ? `stretch`
      : 'unset',
}));

const Sidebar21 = styled(Sidebar2, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  width: data.currentVariant === 'Indextablet720' ? 'unset' : `720px`,
  height: data.currentVariant === 'Indextablet720' ? 'unset' : `309px`,
  margin: `0px`,
  alignSelf: data.currentVariant === 'Indextablet720' ? `stretch` : 'unset',
}));

const Image1 = styled('div')({
  display: `flex`,
  position: `fixed`,
  top: 0,
  left: 100,
  width: '100%',
  height: '100%',
  zIndex: -1, // make the container behind the other elements
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const ImageM = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  backgroundImage: `url(assets/images/Index_Image_m.png)`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'IndexMobile390' ? `column` : `row`,
  justifyContent:
    data.currentVariant === 'IndexMobile390' ? `flex-start` : `center`,
  alignItems:
    data.currentVariant === 'IndexMobile390'
      ? `center`
      : data.currentVariant === 'Indexmobile375'
      ? `center`
      : `flex-start`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const ContentContainer = styled('div')({

  transition: 'opacity 0.5s ease-in-out',
  opacity: 0,
  '&.loaded': {
    opacity: 1,
  },
  backgroundColor: `rgba(12, 46, 47, 1)`, 
  
});

function Index(props) {
  const { data } = useIndex();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.classList.add("loaded");
    }

    // Disable scrolling if loading
    const handleScroll = (e) => {
      if (isLoading) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return (
    <>
      <div style={{ backgroundColor: `rgba(12, 46, 47, 1)` }}>
        {isLoading && <Loading />}
        <ContentContainer className={!isLoading ? "loaded" : ""}>
          <IndexDesktop1080 className={props.className} data={data}>
            <Page data={data}>
              {data.currentVariant === "Indexmobile375" && (
                <SidebarMobileSmall1 data={data} />
              )}
              {data.currentVariant === "IndexMobile390" && (
                <SidebarMobileSmall1 data={data} />
              )}
              {data.currentVariant === "Indextablet1024" && (
                <MenuTablet1 data={data} />
              )}
              {!(data.currentVariant === "Indextablet1024") &&
                !(data.currentVariant === "Indextablet720") &&
                !(data.currentVariant === "IndexMobile390") &&
                !(data.currentVariant === "Indexmobile375") && (
                  <MenuDesktop1 data={data} />
                )}
              {data.currentVariant === "Indextablet720" && (
                <Sidebar21 data={data} />
              )}
              {!(data.currentVariant === "Indextablet720") &&
                !(data.currentVariant === "IndexMobile390") &&
                !(data.currentVariant === "Indexmobile375") && (
                  <Image1>
                    <Lottie path="/animation.json" />
                  </Image1>
                )}
              {(data.currentVariant === "Indextablet720" ||
                data.currentVariant === "IndexMobile390" ||
                data.currentVariant === "Indexmobile375") && (
                <ImageM data={data}></ImageM>
              )}
            </Page>
          </IndexDesktop1080>
        </ContentContainer>
      </div>
    </>
  );
}

export default Index;
