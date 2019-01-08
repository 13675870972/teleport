/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import styled from 'styled-components'
import { Button } from 'shared/components';
import * as Icons from 'shared/components/Icon';
import { fade } from 'shared/components/utils/colorManipulator';

const SsoButton = props => {
  const { color, Icon } = pickSso(props.type);
  return (
    <StyledButton color={color} block size="large" {...props}>
      {Boolean(Icon) && (
        <IconBox>
          <Icon />
        </IconBox>
      )}
      {props.children}
    </StyledButton>
  )
}

function pickSso(type) {
  switch (type) {
    case 'microsoft':
      return { color: '#2672ec', Icon: Icons.Windows };
    case 'github':
      return { color: '#444444', Icon: Icons.Github };
    case 'bitbucket':
      return { color: '#205081', Icon: Icons.BitBucket };
    case 'google':
      return { color: '#dd4b39', Icon: Icons.Google };
    case 'openid':
      return { color: '#f7931e', Icon: Icons.OpenID };
    default:
    return { color: '#f7931e' };
  }
}

const StyledButton = styled(Button)`
  background-color: ${ props => props.color};
  &:hover, &:focus {
    background: ${ props => fade(props.color, 0.4 ) };
  }

  position: relative;
  box-sizing: border-box;
  margin: 32px 0 0 0;
`

const IconBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 32px;
  font-size: 1.3em;
  text-align: center;
  border-right: 1px solid rgba(0,0,0,.2);
`

export default SsoButton;