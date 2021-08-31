import React from 'react';

import Logo from 'components/Logo';
import Button from 'components/Button';
import * as S from './styles';

import Container from 'components/Container';

import { LogoProps, HeaderProps } from 'types/api';
import { getImageURL } from 'utils/getImageURL';

type Props = {
  logo: LogoProps;
  header: HeaderProps;
};

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url} wide>
              Comprar
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageURL(header.image.url)}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
);

export default SectionHero;
