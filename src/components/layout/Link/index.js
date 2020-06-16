/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Anchor = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const LinkStyled = ({ href, children, title }) => {
  const useLink = href.match(/((^tel:)|(^mailto:)|(^http:\/\/)|(^https:\/\/)|#)/gm);
  return !useLink
    ? <Link href={href}><Anchor href={href} title={title}>{children}</Anchor></Link>
    : <Anchor href={href} title={title}>{children}</Anchor>;
};

LinkStyled.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// LinkStyled.defaultProps = {
//   as: '',
// };

export default LinkStyled;
