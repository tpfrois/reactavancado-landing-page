import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import icons from './content';
import * as S from './styles';
import { SectionTechProps } from 'types/api';
import { getImageURL } from 'utils/getImageURL';

const SectionTech = ({ title, techItems }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techItems.map(({ name, icon }) => (
          <S.Icon key={name}>
            <S.Icons
              src={getImageURL(icon.url)}
              alt={icon.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{name}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
);

export default SectionTech;
