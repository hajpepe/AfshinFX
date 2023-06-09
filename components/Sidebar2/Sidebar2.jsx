import React from "react";
import { Button, Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";
import TagMobile from "components/TagMobile/TagMobile";
import Form from "components/Form/Form";
import { animated, useSpring, easings } from "react-spring";
import useSidebar2 from "components/Sidebar2/useSidebar2";
import { motion, useAnimate, stagger } from "framer-motion";

const CollapsableClose = animated(
  styled("div", {
    shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
  })(({ data }) => ({
    backgroundColor: `rgba(12, 46, 47, 1)`,
    borderRadius: `0px 0px 20px 20px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    height: `309px`,
    width: "100%",
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
  }))
);

const Frame1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-end`,
  padding: `19px 30px 37px 30px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Frame11 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Frame12 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `26px`,
  margin: `0px`,
});

const Close = animated(
  styled("div", {
    shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
  })(({ data }) => ({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px`,
  }))
);

const MenuIco1 = styled("img")({
  height: `26px`,
  width: `26px`,
  objectFit: `cover`,
  margin: `0px`,
});

const Open = animated(
  styled("div", {
    shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
  })(({ data }) => ({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `26px`,
    height: `26px`,
    margin: `0px 0px 0px 10px`,
  }))
);

const Close1 = styled("img")({
  height: `20px`,
  width: `20px`,
  objectFit: `cover`,
  margin: `0px`,
});

const Frame13 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `10px 0px 0px 0px`,
});

const Frame14 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Frame15 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `174px`,
  width: `174px`,
  margin: `0px`,
});

const LogoMobile1 = styled("img")({
  height: `174px`,
  width: `174px`,
  objectFit: `cover`,
  margin: `0px`,
});

const ButtonOutlined = styled(Button)({
  margin: `23px 0px 0px 0px`,
});

const ABriefDescriptionAbo = styled("div")(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(55, 253, 254, 1)`,
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,
  textDecoration: theme.typography["Typography"]["Body 1"].textDecoration,
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,
  alignSelf: `stretch`,
  margin: `23px 0px 0px 0px`,
}));

const IStartedMyProfession = styled("div")(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(181, 201, 201, 1)`,
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,
  alignSelf: `stretch`,
  margin: `23px 0px 0px 0px`,
}));

const SomeOfTheSoftwarePro = styled("div")(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,
  alignSelf: `stretch`,
  margin: `23px 0px 0px 0px`,
}));

const TagMobileMeduim1 = styled(TagMobile)(({ theme }) => ({
  height: `91.5px`,
  width: `535px`,
  margin: `23px 0px 0px 0px`,
}));

const Form1 = styled(Form)(({ theme }) => ({
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const Socials = animated(
  styled('div', {
    shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
  })(({ data }) => ({
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
    margin: `0px`,
  }))
);

const Text = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `13px 0px 0px 0px`,
});

const FollowMySocialMedia = styled('div')(({ theme }) => ({
  textAlign: `center`,
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
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `13px 0px 0px 0px`,
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



const textVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: "-50%",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: "0%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function Sidebar2(props) {
  const { data, fns } = useSidebar2();

  const CollapsableCloseCollapsableClose = { height: `309px` };
  const CollapsableCloseCollapsableOpen = { height: `704px` };
  const [CollapsableCloseStateStyles, CollapsableCloseStateApi] = useSpring(
    () => ({
      from: eval("CollapsableClose" + data.currentVariant),
      config: { duration: 1000 },
      delay: 500,
    })
  );

  const CloseCollapsableClose = { margin: `0px 0px 0px 0px` };
  const CloseCollapsableOpen = { margin: `0px 0px 0px 10px` };
  const [CloseStateStyles, CloseStateApi] = useSpring(() => ({
    from: eval("Close" + data.currentVariant),
    config: { duration: 1000 },
    delay: 500,
  }));

  const OpenCollapsableClose = { margin: `0px 0px 0px 10px` };
  const OpenCollapsableOpen = { margin: `0px 0px 0px 0px` };
  const [OpenStateStyles, OpenStateApi] = useSpring(() => ({
    from: eval("Open" + data.currentVariant),
    config: { duration: 1000 },
    delay: 500,
  }));

  const switchStateToCollapsableClose = (
    duration = 0,
    delay = 0,
    easing = "linear"
  ) => {
    CollapsableCloseStateApi.start({
      ...CollapsableCloseCollapsableClose,
      delay,
      config: { duration, easing: easings[easing] },
    });
    CloseStateApi.start({
      ...CloseCollapsableClose,
      delay,
      config: { duration, easing: easings[easing] },
    });
    OpenStateApi.start({
      ...OpenCollapsableClose,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };

  const switchStateToCollapsableOpen = (
    duration = 0,
    delay = 0,
    easing = "linear"
  ) => {
    CollapsableCloseStateApi.start({
      ...CollapsableCloseCollapsableOpen,
      delay,
      config: { duration, easing: easings[easing] },
    });
    CloseStateApi.start({
      ...CloseCollapsableOpen,
      delay,
      config: { duration, easing: easings[easing] },
    });
    OpenStateApi.start({
      ...OpenCollapsableOpen,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };
  return (
    <CollapsableClose
      className={props.className}
      data={data}
      style={{ ...CollapsableCloseStateStyles }}
    >
      <Frame1>
        <Frame11>
          <Frame12>
            {!(data.currentVariant === "CollapsableOpen") && (
              <motion.div
                animate={{ transform: "translateX(5px)" }}
                initial={{ scale: 0.5 }}
              >
                <Close
                  onClick={() => {
                    switchStateToCollapsableOpen(400, 100, "easeOutQuart");
                    fns.setCurrentVariant("CollapsableOpen");
                  }}
                  data={data}
                  style={{ ...CloseStateStyles }}
                >
                  <MenuIco1
                    src={`assets/images/Sidebar2_menu_ico_1.png`}
                    loading="lazy"
                    alt={"menu-ico 1"}
                  />
                </Close>
              </motion.div>
            )}
            {data.currentVariant === "CollapsableOpen" && (
              <motion.div
                whileTap={{
                  delay: 50,
                  rotate: 35,
                  scale: 1,
                  type: "spring",
                  stiffness: 20,
                  damping: 30,
                }}
                initial={{ scale: 1 }}
                animate={{ rotate: 180, scale: 1 }}
              >
                <Open
                  onClick={() => {
                    switchStateToCollapsableClose(250, 100, "easeOutQuart");
                    fns.setCurrentVariant("CollapsableClose");
                  }}
                  data={data}
                  style={{ ...OpenStateStyles }}
                >
                  <Close1
                    src={`assets/images/Sidebar2_Close_1.png`}
                    loading="lazy"
                    alt={"Close 1"}
                  />
                </Open>
              </motion.div>
            )}
          </Frame12>
          <Frame13>
            <Frame14>
              <Frame15>
                <LogoMobile1
                  src={`assets/images/Sidebar2_logo_mobile_1.png`}
                  loading="lazy"
                  alt={"logo-mobile 1"}
                />
              </Frame15>
              <ButtonOutlined
                variant="outlined"
                size="large"
                color="primary"
                onClick={fns.toggleDialog}
              >
                {" "}
                Contact me{" "}
              </ButtonOutlined>
              {data.currentVariant === "CollapsableOpen" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  <ABriefDescriptionAbo>
                    {`A brief description about me`}
                  </ABriefDescriptionAbo>
                </motion.div>
              )}
              {data.currentVariant === "CollapsableOpen" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  <IStartedMyProfession>
                    {`I started my professional career 10 years ago with visual effects, and during these years, I have gained experience in areas such as animation, scripting, storyboarding, videography, directing, UI and UX design. Additionally, I have also strengthened my skills in project management, teamwork, and digital marketing.`}
                  </IStartedMyProfession>
                </motion.div>
              )}
              {data.currentVariant === "CollapsableOpen" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  <SomeOfTheSoftwarePro>
                    {`Some of the software programs
I work with.`}
                  </SomeOfTheSoftwarePro>
                </motion.div>
              )}
              {data.currentVariant === "CollapsableOpen" && (
                <TagMobileMeduim1 />
              )}
            </Frame14>
            {data.currentVariant === 'CollapsableOpen' && (
              <Socials data={data} >

                <Text>
                  <FollowMySocialMedia>
                    {`FOLLOW MY SOCIAL MEDIA`}
                  </FollowMySocialMedia>
                </Text>
                <Icons>
                  <Dribbble>
                    <ExternalLink href="https://dribbble.com/AfshinFX">
                      <Dribbble1
                        src={`assets/images/Sidebar2_Dribbble.png`}
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
                        src={`assets/images/Sidebar2_Behance.png`}
                        loading="lazy"
                        alt={'Behance'}
                      />
                    </ExternalLink1>
                  </Behance>
                </Icons>
              </Socials>
            )}
          </Frame13>
        </Frame11>
      </Frame1>
      <Dialog className="hasharikardi" open={data.isDialogOpen} onClose={fns.toggleDialog}>
        <Form1
         className="Hasharishodam"
          isDialogOpen={data.isDialogOpen}
          toggleDialog={fns.toggleDialog}
        />
      </Dialog>
    </CollapsableClose>
  );
}

export default Sidebar2;
