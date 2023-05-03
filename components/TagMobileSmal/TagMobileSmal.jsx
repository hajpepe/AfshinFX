/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import Tag from 'components/Tag/Tag';

const MobileSmall = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const Frame1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `40.75px`,
  margin: `0px`,
});

const Tag1 = styled(Tag)(({ theme }) => ({
  margin: `0px`,
}));

const Tag2 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag3 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag4 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag5 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Frame3 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `40.75px`,
  margin: `10px 0px 0px 0px`,
});

const Tag6 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag7 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag8 = styled(Tag)(({ theme }) => ({
  margin: `0px`,
}));

const Tag9 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag10 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Frame2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `40.75px`,
  margin: `10px 0px 0px 0px`,
});

const Tag11 = styled(Tag)(({ theme }) => ({
  margin: `0px`,
}));

const Tag12 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag13 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag14 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag15 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Frame4 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `40.75px`,
  margin: `10px 0px 0px 0px`,
});

const Tag16 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag17 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag18 = styled(Tag)(({ theme }) => ({
  margin: `0px`,
}));

const Tag19 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

const Tag20 = styled(Tag)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}));

function TagMobileSmal(props) {
  return (
    <MobileSmall className={props.className}>
      <Frame1>
        <Tag1 badgeText={'After Effect'} />
        <Tag2 badgeText={'Figma'} />
        {false && <Tag3 />}
        {false && <Tag4 />}
        {false && <Tag5 />}
      </Frame1>
      <Frame3>
        {false && <Tag6 />}
        {false && <Tag7 />}
        <Tag8 badgeText={'Adobe Premiere'} />
        <Tag9 badgeText={'Photoshop'} />
        {false && <Tag10 />}
      </Frame3>
      <Frame2>
        <Tag11 badgeText={'Cinema 4D'} />
        <Tag12 badgeText={'Midjourney'} />
        {false && <Tag13 />}
        {false && <Tag14 />}
        {false && <Tag15 />}
      </Frame2>
      <Frame4>
        {false && <Tag16 />}
        {false && <Tag17 />}
        <Tag18 badgeText={'Adobe XD'} />
        <Tag19 badgeText={'Spline'} />
        <Tag20 badgeText={'Quest'} />
      </Frame4>
    </MobileSmall>
  );
}

export default TagMobileSmal;