import styled from 'styled-components';

export default {
  title: 'Color Styles',
};

const PRIMARY = '#FF9F63';
const SECONDARY = '#36339E';
const ACCENT = '#C36794';
const TEXT = '#333333';
const BORDER = '#B8B8B8';
const FOND_CARTE = '#F5F5F5';
const COULEUR_PAGE = '#EEF6F5';
const BOUTON_COLOR = '#FFD0AA';
const HEADER_COLOR = `linear-gradient(to top, #36339E, #FFF)`;
const FOOTER_COLOR = `linear-gradient(to bottom, #36339E, #FFF)`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${BORDER};
  border-radius: 4px;
`;

export const Primary = () => <Box style={{ backgroundColor: PRIMARY, color: TEXT }}>Primary</Box>;

export const Secondary = () => <Box style={{ backgroundColor: SECONDARY, color: TEXT }}>Secondary</Box>;

export const Accent = () => <Box style={{ backgroundColor: ACCENT, color: TEXT }}>Accent</Box>;

export const Text = () => <Box style={{ backgroundColor: TEXT, color: COULEUR_PAGE }}>Text</Box>;

export const Border = () => <Box style={{ backgroundColor: BORDER, color: TEXT }}>Border</Box>;

export const FondCarte = () => <Box style={{ backgroundColor: FOND_CARTE, color: TEXT }}>Fond Carte</Box>;

export const CouleurPage = () => <Box style={{ backgroundColor: COULEUR_PAGE, color: TEXT }}>Couleur Page</Box>;

export const Bouton = () => <Box style={{ backgroundColor: BOUTON_COLOR, color: COULEUR_PAGE }}>Bouton</Box>;

export const Header = () => <Box style={{ backgroundImage: HEADER_COLOR, color: COULEUR_PAGE }}>Header</Box>;

export const Footer = () => <Box style={{ backgroundImage: FOOTER_COLOR, color: COULEUR_PAGE }}>Footer</Box>;
