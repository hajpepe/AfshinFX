
import React from 'react';
import { Button, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tags from 'components/Tags/Tags';
import Form from 'components/Form/Form';
import useMenuDesktop from 'components/MenuDesktop/useMenuDesktop';

const MenuLargNormal = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: '100vh',
  width: `366px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Frame1 = styled('div')({
  backgroundColor: `rgba(12, 46, 47, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `66px 64px 140px 64px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Menu = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Frame11 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Logo1 = styled('img')({
  height: `80px`,
  width: `200px`,
  objectFit: `cover`,
  margin: `0px`,
});

const ButtonOutlined = styled(Button)({
  margin: `33px 0px 0px 0px`,
});

const ABriefDescriptionAbo = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(55, 253, 254, 1)`,
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  alignSelf: `stretch`,
  margin: `33px 0px 0px 0px`,
}));

const Frame12 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `33px 0px 0px 0px`,
});

const IStartedMyProfession = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(181, 201, 201, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.17000000178813934px`,
  textDecoration: `none`,
  lineHeight: `140.9999966621399%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Frame13 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `33px 0px 0px 0px`,
});

const Frame14 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const SomeOfTheSoftwarePro = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: theme.typography['Typography']['Body 2'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 2'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 2'].fontWeight,
  fontSize: theme.typography['Typography']['Body 2'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 2'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 2'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 2'].textDecoration,
  textTransform: theme.typography['Typography']['Body 2'].textTransform,
  flex: `1`,
  margin: `0px`,
}));

const TagsDesktop1 = styled(Tags)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `25px 0px 0px 0px`,
}));

const Form1 = styled(Form)(({ theme }) => ({
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const Socials = styled('div')({
  backgroundColor: `rgba(12, 46, 47, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `38px 0px 0px 0px`,
});



const Text = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `25px 0px 0px 0px`,
});


const FollowMySocialMedia = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(55, 253, 254, 1)`,
  fontStyle: theme.typography['Typography']['Body 2'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 2'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 2'].fontWeight,
  fontSize: theme.typography['Typography']['Body 2'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 2'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 2'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 2'].textDecoration,
  textTransform: theme.typography['Typography']['Body 2'].textTransform,
  flex: `1`,
  margin: `0px`,
}));


const Icons = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `25px 0px 0px 0px`,
});

const Dribbble = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px`,
});

const Dribbble1 = styled('img')({
  height: `18px`,
  width: `18px`,
  objectFit: `cover`,
  margin: `0px`,
});

const ExternalLink = styled('a')({
  textDecoration: `none`,
  width: `100%`,
});

const Behance = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  margin: `0px 0px 0px 18px`,
});

const Behance1 = styled('img')({
  height: `14px`,
  width: `22px`,
  objectFit: `cover`,
  margin: `0px`,
});

const ExternalLink1 = styled('a')({
  textDecoration: `none`,
  width: `100%`,
});


function MenuDesktop(props) {
  const { data, fns } = useMenuDesktop();

  return (
    <MenuLargNormal className={props.className}>
      <Frame1>
        <Menu>
          <Frame11>
            <Logo1
              src={`assets/images/MenuDesktop_logo_1.png`}
              loading="lazy"
              alt={'logo 1'}
            />
          </Frame11>
          <ButtonOutlined
            variant="outlined"
            size="large"
            color="primary"
            onClick={fns.toggleDialog}
          >
            {' '}
            Contact me{' '}
          </ButtonOutlined>
          <ABriefDescriptionAbo>
            {`A brief description about me`}
          </ABriefDescriptionAbo>
          <Frame12>
            <IStartedMyProfession>
              {`I started my professional career 10 years ago with visual effects, and during these years, I have gained experience in areas such as animation, scripting, storyboarding, videography, directing, UI and UX design. Additionally, I have also strengthened my skills in project management, teamwork, and digital marketing.`}
            </IStartedMyProfession>
          </Frame12>
          <Frame13>
            <Frame14>
              <SomeOfTheSoftwarePro>
                {`Some of the software programs
I work with.`}
              </SomeOfTheSoftwarePro>
            </Frame14>
            <TagsDesktop1 />
          </Frame13>
        </Menu>
        <Socials>
          <Text>
            <FollowMySocialMedia>
              {`FOLLOW MY SOCIAL MEDIA`}
            </FollowMySocialMedia>
          </Text>
          <Icons>
            <Dribbble>
              <ExternalLink
                href="https://dribbble.com/AfshinFX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Dribbble1
                  src={`assets/images/Menu_Dribbble.png`}
                  loading="lazy"
                  alt={'Dribbble'}
                />
              </ExternalLink>
            </Dribbble>
            <Behance>
              <ExternalLink1
                href="https://www.behance.net/afshinfx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Behance1
                  src={`assets/images/Menu_Behance.png`}
                  loading="lazy"
                  alt={'Behance'}
                />
              </ExternalLink1>
            </Behance>
          </Icons>
        </Socials>
      </Frame1>
      <Dialog className="hasharikardi" open={data.isDialogOpen} onClose={fns.toggleDialog}>
        <Form1
           className="Hasharishodam"
          isDialogOpen={data.isDialogOpen}
          toggleDialog={fns.toggleDialog}
        />
      </Dialog>
    </MenuLargNormal>
  );
}

export default MenuDesktop;
