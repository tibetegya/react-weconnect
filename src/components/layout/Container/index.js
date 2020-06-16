import styled from 'styled-components';

export const Container = styled.div`

${props => props.theme.media.phone} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
  .col-sm-1 {
    grid-column: span 1;
  }
  .col-sm-2 {
    grid-column: span 2;
  }
  .col-sm-3 {
    grid-column: span 3;
  }
  .col-sm-4 {
    grid-column: span 4;
  }
}

/* Tablet */
${props => props.theme.media.tablet} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
    width: 100%;
    padding-right: 24px;
    padding-left: 24px;
  .col-md-1 {
    grid-column: span 1;
  }
  .col-md-2 {
    grid-column: span 2;
  }
  .col-md-3 {
    grid-column: span 3;
  }
  .col-md-4 {
    grid-column: span 4;
  }
  .col-md-5 {
    grid-column: span 5;
  }
  .col-md-6 {
    grid-column: span 6;
  }
  .col-md-7 {
    grid-column: span 7;
  }
  .col-md-8 {
    grid-column: span 8;
  }
}
/* desktop */
${props => props.theme.media.min.desktopSmall} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
    max-width: 1024px;
    margin-right: auto;
    margin-left: auto;
  ${({ theme: { media } }) => media.setMinMax(media.min.desktopSmall, media.max.tablet + 48)} {
  /* @media screen and (min-width: 1025px) and (max-width: 1072px) { */
    .container {
      width: calc(100% - 48px);
      margin-right: 24px;
      margin-left: 24px;
    }
  }
  .col-lg-1 {
    grid-column: span 1;
  }
  .col-lg-2 {
    grid-column: span 2;
  }
  .col-lg-3 {
    grid-column: span 3;
  }
  .col-lg-4 {
    grid-column: span 4;
  }
  .col-lg-5 {
    grid-column: span 5;
  }
  .col-lg-6 {
    grid-column: span 6;
  }
  .col-lg-7 {
    grid-column: span 7;
  }
  .col-lg-8 {
    grid-column: span 8;
  }
  .col-lg-9 {
    grid-column: span 9;
  }
  .col-lg-10 {
    grid-column: span 10;
  }
  .col-lg-11 {
    grid-column: span 11;
  }
  .col-lg-12 {
    grid-column: span 12;
  }
}
`;

export const InlineContainer = styled(Container)`
  margin: 0;
  padding: 0;
  ${props => props.theme.media.phone} {
  margin: 0;
  padding: 0;
  }
  ${props => props.theme.media.tablet} {
  margin: 0;
  padding: 0;
  }
  ${props => props.theme.media.min.desktopSmall} {
  margin: 0;
  padding: 0;
  }
  ${props => props.theme.media.desktopLarge} {
  margin: 0;
  padding: 0;
  }
`;

export { default as Row } from './Row';
export { Column } from './Column';

export { Container as default };
