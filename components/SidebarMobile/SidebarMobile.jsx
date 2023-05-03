import React from "react";
import { Button, Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";
import TagMobileSmal from "components/TagMobileSmal/TagMobileSmal";
import Form from "components/Form/Form";
import { motion, useSpring  } from "framer-motion";
import useSidebarMobile from "components/SidebarMobile/useSidebarMobile";

const CollapsableClose = motion(
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
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `26px`,
  margin: `0px`,
});

const Close = motion(
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

const Open = motion(
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

const Frame12 = styled("div")({
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

const Frame13 = styled("div")({
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

const TagMobileSmal1 = styled(TagMobileSmal)(({ theme }) => ({
  margin: `23px 0px 0px 0px`,
}));

const Form1 = motion(
  styled(Form, {
    shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
  })(({ theme, data }) => ({
    alignSelf: `stretch`,
    height: `158.5px`,
    margin: `0px`,
    flex: "unset",
  }))
);
function SidebarMobile(props) {
  const { data, fns } = useSidebarMobile();

  const CollapsableCloseCollapsableClose = { height: `309px` };
  const CollapsableCloseCollapsableOpen = { height: `800px` };
  const CollapsableCloseStateStyles = useSpring(
    CollapsableCloseCollapsableClose
  );

  const CloseCollapsableClose = { margin: `0px 0px 0px 0px` };
  const CloseCollapsableOpen = { margin: `0px 0px 0px 10px` };
  const CloseStateStyles = useSpring(CloseCollapsableClose);

  const OpenCollapsableClose = { margin: `0px 0px 0px 10px` };
  const OpenCollapsableOpen = { margin: `0px 0px 0px 0px` };
  const OpenStateStyles = useSpring(OpenCollapsableClose);

  const Form1CollapsableClose = { height: `158.5px`, flex: "unset" };
  const Form1CollapsableOpen = { height: "400px", flex: `1` };
  const Form1StateStyles = useSpring(Form1CollapsableClose);

  const switchStateToCollapsableClose = (
    duration = 0,
    delay = 0,
    easing = "linear"
  ) => {
    CollapsableCloseStateStyles.set({
      ...CollapsableCloseCollapsableClose,
      delay,
      duration,
      ease: easing,
    });
    CloseStateStyles.set({
      ...CloseCollapsableClose,
      delay,
      duration,
      ease: easing,
    });
    OpenStateStyles.set({
      ...OpenCollapsableClose,
      delay,
      duration,
      ease: easing,
    });
    Form1StateStyles.set({
      ...Form1CollapsableClose,
      delay,
      duration,
      ease: easing,
    });
  };
  const switchStateToCollapsableOpen = (
    duration = 500,
    delay = 0,
    easing = "easeOutQuart"
  ) => {
    CollapsableCloseStateStyles.set({
      ...CollapsableCloseCollapsableOpen,
      delay,
      duration,
      ease: easing,
    });
    CloseStateStyles.set({
      ...CloseCollapsableOpen,
      delay,
      duration,
      ease: easing,
    });
    OpenStateStyles.set({
      ...OpenCollapsableOpen,
      delay,
      duration,
      ease: easing,
    });
    Form1StateStyles.set({
      ...Form1CollapsableOpen,
      delay,
      duration,
      ease: easing,
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
          {!(data.currentVariant === "CollapsableOpen") && (
            <Close
              onClick={() => {
                switchStateToCollapsableOpen(500, 1, "easeOutQuart");
                fns.setCurrentVariant("CollapsableOpen");     
              }}
              data={data}
              style={{ ...CloseStateStyles }}
              transition
            >
              <MenuIco1
                src={`assets/images/Sidebarmobile_menu_ico_1.png`}
                loading="lazy"
               alt={"menu-ico 1"}      
              />
            </Close>
          )}
          {data.currentVariant === "CollapsableOpen" && (
            <Open
              onClick={() => {
                switchStateToCollapsableClose(250, 100, "linear");
                fns.setCurrentVariant("CollapsableClose");
              }}
              data={data}
              style={{ ...OpenStateStyles }}
            >
              <Close1
                src={`assets/images/Sidebarmobile_Close_1.png`}
                loading="lazy"
                alt={"Close 1"}
              />
            </Open>
          )}
        </Frame11>
        <Frame12>
          <Frame13>
            <LogoMobile1
              src={`assets/images/Sidebarmobile_logo_mobile_1.png`}
              loading="lazy"
              alt={"logo-mobile 1"}
            />
          </Frame13>
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
            <ABriefDescriptionAbo>
              {`A brief description about me`}
            </ABriefDescriptionAbo>
          )}
          {data.currentVariant === "CollapsableOpen" && (
            <IStartedMyProfession>
              {`I started my professional career 10 years ago with visual effects, and during these years, I have gained experience in areas such as animation, scripting, storyboarding, videography, directing, UI and UX design. Additionally, I have also strengthened my skills in project management, teamwork, and digital marketing.`}
            </IStartedMyProfession>
          )}
          {data.currentVariant === "CollapsableOpen" && (
            <SomeOfTheSoftwarePro>
              {`Some of the software programs
I work with.`}
            </SomeOfTheSoftwarePro>
          )}
          {data.currentVariant === "CollapsableOpen" && <TagMobileSmal1 />}
        </Frame12>
      </Frame1>
      <Dialog isOpen={data.isDialogOpen} onClose={fns.toggleDialog}>
        <Form1
          data={data}
          isDialogOpen={data.isDialogOpen}
          toggleDialog={fns.toggleDialog}
          style={{ ...Form1StateStyles }}
        />
      </Dialog>
    </CollapsableClose>
  );
}

export default SidebarMobile;
