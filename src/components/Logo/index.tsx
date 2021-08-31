import React from 'react';
import * as S from './styles';

import { LogoProps } from 'types/api';
import { getImageURL } from 'utils/getImageURL';

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={getImageURL(url)} alt={alternativeText} />
);

export default Logo;
