import styled from 'styled-components';

export const Form = styled.form`
  input {
    border-radius: 4px;
    background-color: #f5f5f5;
    min-width: 220px;
    padding: 10px 36px 10px 18px;
    border: none;
    outline: none;
    color: #eee;
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    background-image: url('/icons/search.svg');
    background-repeat: no-repeat;
    background-size: 16px;
    background-position-x: calc(100% - 18px);
    background-position-y: center;
    &:focus {
    color: #848484;
    }
  }

`;
export const Logo = styled.img`
  display: none;
  ${props => props.theme.media.min.desktopSmall} {
    display: block;
  }
`;

export const Nav = styled.nav`
ul {
  padding-left: 0;
  margin-left: 0;
  display: flex;
  li {
    margin-left: 10px;
    margin-right: 10px;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
}
li {
  list-style: none;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  span {
    /* border: 1px solid blue; */
  }
}

`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 8px 20px;
  font-family: inherit, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  background-color: #293D81;
  color: white;
  border-radius: 4px;
  &.secondary {
    background-color: transparent;
    color: #000;
    &:hover {
      background-color: #f5f5f5;
    }
  }

`;

export const IconButton = styled.button`
  background-color: transparent;
  position: relative;
  cursor: pointer;
  outline: none;
  border: none;
  width: ${props => (props.iconSize || '1.5rem')};
  height: ${props => (props.iconSize || '1.5rem')};
  &:before {
    content: "";
    position: absolute;
    background-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-image: ${({ icon }) => `url(${icon})`};
    mask-size: ${props => (props.iconSize || '1.5rem')};
    top:0;
    left: 0;
    width: ${props => (props.iconSize || '1.5rem')};
    height: ${props => (props.iconSize || '1.5rem')};
    background-color: #293D81;
  }
`;

export const MenuIcon = styled.div`

`;

export const SearchIcon = styled.div`

`;

export const Wrapper = styled.div`
  /* border: 1px solid red; */
  border-bottom: 2px solid #E5E5E5;
  .row {
    display: flex;
    /* border: 1px solid blue; */
    align-items: center;
    justify-content: space-between;
    height: 88px;
  }
  ${props => props.theme.media.phone} {
  .row {
    height: 56px;
  }
    ${Form}, ${Nav} {
      display: none;
    }
  }

  ${props => props.theme.media.min.tablet} {
    ${SearchIcon} {
      display: none;
    }
  }

  ${props => props.theme.media.min.desktopSmall} {
    ${MenuIcon} {
      display: none;
    }
  }
`;
