export const breakpoints = {
  phone: { min: 320, max: 599 },
  tablet: { min: 600, max: 1023 },
  desktopSmall: { min: 1024, max: 1279 },
  desktopLarge: { min: 1280, max: 1440 },
};

const setMin = size => `@media screen and (min-width: ${size}px)`;
const setMax = size => `@media screen and (max-width: ${size}px)`;
const setMinMax = ({ min, max }) => `@media screen and (min-width: ${min}px) and (max-width: ${max}px)`;

export const mediaQueries = {
  breakpoints,
  setMin,
  setMax,
  setMinMax,
  min: {
    phone: setMin(breakpoints.phone.min),
    tablet: setMin(breakpoints.tablet.min),
    desktopSmall: setMin(breakpoints.desktopSmall.min),
    desktopLarge: setMin(breakpoints.desktopLarge.min),

  },
  max: {
    phone: setMax(breakpoints.phone.max),
    tablet: setMax(breakpoints.tablet.max),
    desktopSmall: setMax(breakpoints.desktopSmall.max),
    desktopLarge: setMax(breakpoints.desktopLarge.max),
  },
  phone: setMax(breakpoints.phone.max),
  tablet: setMinMax(breakpoints.tablet),
  desktopSmall: setMinMax(breakpoints.desktopSmall),
  desktopLarge: setMinMax(breakpoints.desktopLarge),
};
