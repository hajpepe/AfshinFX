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
import Icons from 'components/Icons/Icons';
import { animated, useSpring, easings } from 'react-spring';
import useBottomMenu from 'components/BottomMenu/useBottomMenu';

const MenuBottomClose = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
  width: 'fit-content',
});

const Icons1 = styled(Icons)(({ theme }) => ({
  margin: `0px`,
}));

function BottomMenu(props) {
  const { data, fns } = useBottomMenu();

  const switchStateTomenubottomclose = (
    duration = 0,
    delay = 0,
    easing = 'linear'
  ) => {};

  const switchStateTomenubottomopen = (
    duration = 0,
    delay = 0,
    easing = 'linear'
  ) => {};
  return (
    <MenuBottomClose className={props.className}>
      <Icons1
        onClick={() => {
          switchStateTomenubottomopen(750, 250, 'easeOutQuart');
          fns.setCurrentVariant('menubottomopen');
        }}
      />
    </MenuBottomClose>
  );
}

export default BottomMenu;
