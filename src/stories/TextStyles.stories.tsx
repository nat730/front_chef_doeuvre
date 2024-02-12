import styled from 'styled-components';

export default {
  title: 'Text Styles',
};

const TH1 = styled.h1`
  font-family: 'Lato';
  font-size: 64px;
  line-height: 72px;
`;

const TH2 = styled.h2`
  font-family: 'Lato';
  font-size: 48px;
  line-height: 56px;
`;

const TH3 = styled.h3`
  font-family: 'Lato';
  font-size: 32px;
  line-height: 40px;
`;

const TH4 = styled.h4`
  font-family: 'Lato';
  font-size: 24px;
  line-height: 32px;
`;

const TP = styled.p`
  font-family: 'Lato';
  font-size: 16px;
  line-height: 24px;
`;

export const H1 = () => <TH1>Heading 1</TH1>;

export const H2 = () => <TH2>Heading 2</TH2>;

export const H3 = () => <TH3>Heading 3</TH3>;

export const H4 = () => <TH4>Heading 4</TH4>;

export const P = () => <TP>Paragraph</TP>;