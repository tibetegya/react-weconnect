import styled from 'styled-components';

export const Column = styled('div')`
justify-self: ${({ justify }) => (justify || 'unset')};
align-self: ${({ align }) => (align || 'unset')}
`;
