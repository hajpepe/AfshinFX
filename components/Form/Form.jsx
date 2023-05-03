import { React, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { SvgIcon, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import useForm from "components/Form/useForm";
import LottieForm from "components/lottieForm/bgform";

const DesktopLarg2K = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ theme, data }) => ({
  boxShadow: theme.customShadows["Elevation"]["6"].boxShadow,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === "ScreenMobile390"
      ? `column`
      : data.currentVariant === "Screenmobile375"
      ? `column`
      : `row`,
  width: "100vw",
  height: "100vh",
  justifyContent: `center`,
  alignItems: `center`,
  padding: data.currentVariant === "Screendesktop1080" ? `0px 1px` : `0px`,
  boxSizing: `border-box`,
}));

const Frame1 = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  background:
    data.currentVariant === "Screendesktop1080"
      ? `linear-gradient(113.65deg, rgba(31, 50, 51, 1) 15.817360082695497%, rgba(47, 77, 74, 1) 89.4412956834994%)`
      : data.currentVariant === "ScreenTablet1024"
      ? `linear-gradient(124.36deg, rgba(31, 50, 51, 1) 18.607939499861985%, rgba(47, 77, 74, 1) 89.19325493362813%)`
      : data.currentVariant === "Screensmalldesktop720"
      ? `linear-gradient(130.82999999999998deg, rgba(31, 50, 51, 1) 20.407475446316965%, rgba(47, 77, 74, 1) 89.03436962862332%)`
      : data.currentVariant === "ScreenMobile390"
      ? `linear-gradient(149.29deg, rgba(31, 50, 51, 1) 25.0409266555972%, rgba(47, 77, 74, 1) 88.6225146127152%)`
      : data.currentVariant === "Screenmobile375"
      ? `linear-gradient(144.14deg, rgba(31, 50, 51, 1) 23.883944822308926%, rgba(47, 77, 74, 1) 88.72535492361958%)`
      : `linear-gradient(113.53999999999999deg, rgba(31, 50, 51, 1) 15.791116143558387%, rgba(47, 77, 74, 1) 89.44349816898176%)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === "ScreenMobile390"
      ? `column`
      : data.currentVariant === "Screenmobile375"
      ? `column`
      : `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const Frame11 = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === "ScreenMobile390"
      ? `column`
      : data.currentVariant === "Screenmobile375"
      ? `column`
      : `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const Frame12 = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent:
    data.currentVariant === "ScreenMobile390"
      ? `flex-start`
      : data.currentVariant === "Screenmobile375"
      ? `flex-start`
      : `center`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  width:
    data.currentVariant === "ScreenTablet1024"
      ? `846px`
      : data.currentVariant === "Screensmalldesktop720"
      ? `553px`
      : data.currentVariant === "ScreenMobile390"
      ? `310px`
      : data.currentVariant === "Screenmobile375"
      ? `298px`
      : `848px`,
  margin: `0px`,
  height:
    data.currentVariant === "ScreenMobile390"
      ? `776px`
      : data.currentVariant === "Screenmobile375"
      ? `632px`
      : "unset",
}));

const Frame13 = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === "ScreenMobile390"
      ? `column`
      : data.currentVariant === "Screenmobile375"
      ? `column`
      : `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width:
    data.currentVariant === "ScreenTablet1024"
      ? `847px`
      : data.currentVariant === "Screensmalldesktop720"
      ? `552px`
      : data.currentVariant === "ScreenMobile390"
      ? `310px`
      : data.currentVariant === "Screenmobile375"
      ? `298px`
      : `844px`,
  margin:
    data.currentVariant === "Screenmobile375" ? `0px` : `10px 0px 0px 0px`,
  height:
    data.currentVariant === "ScreenTablet1024"
      ? `558px`
      : data.currentVariant === "Screensmalldesktop720"
      ? `352px`
      : data.currentVariant === "ScreenMobile390"
      ? `742px`
      : data.currentVariant === "Screenmobile375"
      ? `632px`
      : "unset",
}));

const LeftSide = styled("div", {
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
  width:
    data.currentVariant === "ScreenTablet1024"
      ? `422px`
      : data.currentVariant === "Screensmalldesktop720"
      ? `275px`
      : data.currentVariant === "ScreenMobile390"
      ? `310px`
      : data.currentVariant === "Screenmobile375"
      ? `298px`
      : `421px`,
  height:
    data.currentVariant === "Screensmalldesktop720"
      ? `352px`
      : data.currentVariant === "ScreenMobile390"
      ? `379px`
      : data.currentVariant === "Screenmobile375"
      ? `317px`
      : `558px`,
  margin: `0px`,
}));

const Form1 = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  backgroundColor: `rgba(6, 28, 29, 1)`,
  borderRadius:
    data.currentVariant === "Screensmalldesktop720"
      ? `12px 0px 0px 12px`
      : data.currentVariant === "ScreenMobile390"
      ? `15px 15px 0px 0px`
      : data.currentVariant === "Screenmobile375"
      ? `15px 15px 0px 0px`
      : `28px 0px 0px 28px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === "Screensmalldesktop720"
      ? `19px 30px 10px 30px`
      : data.currentVariant === "ScreenMobile390"
      ? `35px 30px 10px 30px`
      : data.currentVariant === "Screenmobile375"
      ? `15px 30px 10px 30px`
      : `53px 50px 10px 50px`,
  boxSizing: `border-box`,
  width:
    data.currentVariant === "ScreenTablet1024"
      ? `422px`
      : data.currentVariant === "Screensmalldesktop720"
      ? `275px`
      : data.currentVariant === "ScreenMobile390"
      ? `298px`
      : data.currentVariant === "Screenmobile375"
      ? `286.5px`
      : `421px`,
  height:
    data.currentVariant === "Screensmalldesktop720"
      ? `335px`
      : data.currentVariant === "ScreenMobile390"
      ? `379px`
      : data.currentVariant === "Screenmobile375"
      ? `317px`
      : `525px`,
  margin: `0px`,
}));

const Frame14 = styled("div", {
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
  height: `12px`,
  width: `251px`,
  margin:
    data.currentVariant === "Screensmalldesktop720"
      ? `1px 0px 0px 0px`
      : data.currentVariant === "ScreenMobile390"
      ? `10px 0px 0px 0px`
      : data.currentVariant === "Screenmobile375"
      ? `0px`
      : `36px 0px 0px 0px`,
}));

const Frame15 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `245px`,
  margin: `0px`,
});

const Title = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems:
    data.currentVariant === "Screenmobile375" ? `center` : `flex-start`,
  padding:
    data.currentVariant === "ScreenMobile390"
      ? `10px 0px`
      : data.currentVariant === "Screenmobile375"
      ? `10px 0px 15px 0px`
      : `15px 0px`,
  boxSizing: `border-box`,
  margin: data.currentVariant === "Screenmobile375" ? `3px 0px 0px 0px` : `0px`,
  width: data.currentVariant === "Screenmobile375" ? `234px` : "unset",
}));

const ContactMeForm = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(55, 253, 254, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize:
    data.currentVariant === "Screensmalldesktop720"
      ? `18px`
      : data.currentVariant === "ScreenMobile390"
      ? `18px`
      : data.currentVariant === "Screenmobile375"
      ? `18px`
      : `20px`,
  letterSpacing: `1.25px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame16 = styled("div", {
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
  margin:
    data.currentVariant === "Screensmalldesktop720"
      ? `1px 0px 0px 0px`
      : data.currentVariant === "ScreenMobile390"
      ? `10px 0px 0px 0px`
      : data.currentVariant === "Screenmobile375"
      ? `3px 0px 0px 0px`
      : `36px 0px 0px 0px`,
}));

const PleaseSendYourContac = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  margin: `0px`,
});

const TextFieldStandard = styled(TextField, {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  alignSelf:
    data.currentVariant === "Screensmalldesktop720" ? "unset" : `stretch`,
  margin:
    data.currentVariant === "Screensmalldesktop720"
      ? `1px 0px 0px 0px`
      : data.currentVariant === "ScreenMobile390"
      ? `10px 0px 0px 0px`
      : data.currentVariant === "Screenmobile375"
      ? `3px 0px 0px 0px`
      : `36px 0px 0px 0px`,
  width: data.currentVariant === "Screensmalldesktop720" ? `215px` : "unset",
}));

const TextFieldStandard1 = styled(TextField, {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  alignSelf: `stretch`,
  margin:
    data.currentVariant === "Screensmalldesktop720"
      ? `1px 0px 0px 0px`
      : data.currentVariant === "ScreenMobile390"
      ? `10px 0px 0px 0px`
      : data.currentVariant === "Screenmobile375"
      ? `3px 0px 0px 0px`
      : `36px 0px 0px 0px`,
}));

const TextFieldStandard2 = styled(TextField, {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  alignSelf: `stretch`,
  margin:
    data.currentVariant === "Screensmalldesktop720"
      ? `1px 0px 0px 0px`
      : data.currentVariant === "ScreenMobile390"
      ? `10px 0px 0px 0px`
      : data.currentVariant === "Screenmobile375"
      ? `3px 0px 0px 0px`
      : `36px 0px 0px 0px`,
}));

const Frame17 = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === "Screensmalldesktop720"
      ? `15px 0px 10px 0px`
      : data.currentVariant === "ScreenMobile390"
      ? `10px 0px`
      : data.currentVariant === "Screenmobile375"
      ? `8px 0px 20px 0px`
      : `20px 0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === "Screensmalldesktop720"
      ? `1px 0px 0px 0px`
      : data.currentVariant === "ScreenMobile390"
      ? `10px 0px 0px 0px`
      : data.currentVariant === "Screenmobile375"
      ? `3px 0px 0px 0px`
      : `36px 0px 0px 0px`,
  height: data.currentVariant === "Screenmobile375" ? `59px` : "unset",
  width: data.currentVariant === "Screenmobile375" ? `93px` : "unset",
}));

const ButtonOutlined = styled(Button, {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  height:
    data.currentVariant === "Screensmalldesktop720"
      ? `30px`
      : data.currentVariant === "ScreenMobile390"
      ? `30px`
      : data.currentVariant === "Screenmobile375"
      ? `30px`
      : `36px`,
  width:
    data.currentVariant === "Screensmalldesktop720"
      ? `93px`
      : data.currentVariant === "ScreenMobile390"
      ? "unset"
      : data.currentVariant === "Screenmobile375"
      ? "unset"
      : `92px`,
  margin: `0px`,
}));

const RightSide = styled("div", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  backgroundColor: `rgba(217, 217, 217, 0)`,
  borderRadius: `0px 29px 29px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  width:
    data.currentVariant === "Screensmalldesktop720"
      ? `277px`
      : data.currentVariant === "ScreenMobile390"
      ? `310px`
      : data.currentVariant === "Screenmobile375"
      ? `298px`
      : `423px`,
  height:
    data.currentVariant === "Screensmalldesktop720"
      ? `352px`
      : data.currentVariant === "ScreenMobile390"
      ? `362px`
      : data.currentVariant === "Screenmobile375"
      ? "unset"
      : `558px`,
  margin: `0px`,
}));

const ContactImageMobile3 = styled("img")({
  height: `315px`,
  width: `298px`,
  objectFit: `cover`,
  margin: `0px`,
});

const ContactImageMobile1 = styled("img", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  height:
    data.currentVariant === "ScreenMobile390"
      ? `362px`
      : data.currentVariant === "Screenmobile375"
      ? `320px`
      : `1px`,
  width:
    data.currentVariant === "ScreenMobile390"
      ? `310px`
      : data.currentVariant === "Screenmobile375"
      ? `298px`
      : `423px`,
  objectFit: `cover`,
  flex:
    data.currentVariant === "ScreenMobile390"
      ? "unset"
      : data.currentVariant === "Screenmobile375"
      ? "unset"
      : `1`,
  margin: `0px`,
}));

const ContactImage1 = styled("img", {
  shouldForwardProp: (prop) => !["data"].includes(prop.toString()),
})(({ data }) => ({
  height: data.currentVariant === "Screensmalldesktop720" ? `352px` : `558px`,
  width: data.currentVariant === "Screensmalldesktop720" ? `277px` : `423px`,
  objectFit: `cover`,
  margin: `0px`,
}));

function Form({ onClose, ...props }) {
  const { data } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!isValidEmail(event.target.value));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError(!event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !message) {
      return;
    }

    if (!isValidEmail(email)) {
      return;
    }

    const webhookUrl =
      "https://discord.com/api/webhooks/1093695850301116436/BUcS3s5WedAt-M_uVAGwls-ITDIsiqnSHNmgkzNKCQOz5Ba41aNsWwwJR6BxOrxr4UdP";
    const content = {
      embeds: [
        {
          title: "Afshinfx.com :",
          color: 65280,
          fields: [
            {
              name: "Name",
              value: name,
            },
            {
              name: "Email",
              value: email,
            },
            {
              name: "Message",
              value: message,
            },
            {
              name: "Time and Date",
              value: new Date().toLocaleString(),
            },
          ],
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/1094407318805950565/1094408370552832092/form.png",
          },
        },
      ],
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        alert("Your message has been sent!", "success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(
          "There was an error sending your message. Please try again later.",
          "error"
        );
      }
    } catch (error) {
      alert(
        "There was an error sending your message. Please try again later.",
        "error"
      );
      console.error(error);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    props.isDialogOpen && (
      <DesktopLarg2K className={props.className} data={data}>
        <Frame1 data={data}>
          <LottieForm className="kos" path="/bgform.json" />
          <Frame11 data={data}>
            <Frame12 data={data}>
              {!(data.currentVariant === "Screenmobile375") && (
                <SvgIcon
                  component={CloseIcon}
                  htmlColor={`Dark/Primary/Main`}
                  onClick={props.toggleDialog}
                ></SvgIcon>
              )}
              <Frame13 data={data}>
                <LeftSide data={data}>
                  <Form1 data={data}>
                    {data.currentVariant === "Screenmobile375" && (
                      <Frame14 data={data}>
                        <Frame15>
                          <SvgIcon
                            component={CloseIcon}
                            htmlColor={`Dark/Primary/Main`}
                            onClick={props.toggleDialog}
                          ></SvgIcon>
                        </Frame15>
                      </Frame14>
                    )}
                    <Title data={data}>
                      <ContactMeForm data={data}>
                        {`Contact Me Form
`}
                      </ContactMeForm>
                    </Title>
                    {false && (
                      <Frame16 data={data}>
                        <PleaseSendYourContac>
                          {`Please send your contact information along with
a brief explanation`}
                        </PleaseSendYourContac>
                      </Frame16>
                    )}
                    <TextFieldStandard
                      variant="standard"
                      size="medium"
                      label={`Email`}
                      data={data}
                      value={email}
                      onChange={handleEmailChange}
                      error={emailError}
                      helperText={
                        emailError ? "Please enter a valid email address." : ""
                      }
                    />
                    <TextFieldStandard1
                      variant="standard"
                      size="medium"
                      label={`Name`}
                      data={data}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextFieldStandard2
                      variant="standard"
                      size="medium"
                      label={`Massege`}
                      data={data}
                      onChange={handleMessageChange}
                      error={messageError}
                      helperText={messageError ? "Please enter a message." : ""}
                      multiline
                      rows={2}
                    />
                    <Frame17 data={data}>
                      <ButtonOutlined
                        variant="outlined"
                        size="medium"
                        color="primary"
                        data={data}
                        type="submit"
                        onClick={handleSubmit}
                      >
                        {" "}
                        Submit{" "}
                      </ButtonOutlined>
                    </Frame17>
                  </Form1>
                </LeftSide>
                <RightSide data={data}>
                  {data.currentVariant === "Screenmobile375" && (
                    <ContactImageMobile3
                      src={`assets/images/form_contact_image_mobile_3.png`}
                      loading="lazy"
                      alt={"contact-image-mobile 3"}
                    />
                  )}
                  {data.currentVariant === "ScreenMobile390" && (
                    <ContactImageMobile1
                      data={data}
                      src={`assets/images/form_contact_image_mobile_1.png`}
                      loading="lazy"
                      alt={"contact-image-mobile 1"}
                    />
                  )}
                  {!(data.currentVariant === "ScreenMobile390") &&
                    !(data.currentVariant === "Screenmobile375") && (
                      <ContactImage1
                        data={data}
                        src={`assets/images/form_contact_image_1.png`}
                        loading="lazy"
                        alt={"contact-image 1"}
                      />
                    )}
                </RightSide>
              </Frame13>
            </Frame12>
          </Frame11>
        </Frame1>
      </DesktopLarg2K>
    )
  );
}

export default Form;
