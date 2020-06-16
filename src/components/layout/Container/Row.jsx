import React from 'react';
import PropTypes from 'prop-types';
import { Column } from './Column';

const Row = ({
  children, className, justify, align,
}) => (
  <Column
    className={`col-sm-4 col-md-8 col-lg-12 ${className}`}
    justify={justify}
    align={align}
  >
    {children}
  </Column>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
};

Row.defaultProps = {
  className: '',
  justify: 'unset',
  align: 'unset',
};

export default Row;
