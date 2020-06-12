import { mediaQueries, breakpoints } from './mediaQueries';
import elevation from './elevation';

const zIndex = {
  top: 1000,
  middle: 500,
  back: 0,
};

export const presets = {
  width: {
    container: '90%',
  },
  elevation,
  breakpoints,
  media: mediaQueries,
  zIndex,
};

const addPresets = theme => ({
  ...presets,
  ...theme,
});

export default addPresets;
