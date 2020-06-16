import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, Button, Nav, Form, IconButton, SearchIcon, MenuIcon, Logo,
} from './styles';
import { Container, Row } from '../Container'

const Navbar = ({ isLoggedIn = false }) => (
  <Wrapper data-testid="navbar">
    <Container>
      <Row className="row">
        <MenuIcon>
          <IconButton icon="/icons/menu.svg" onClick={() => {}} />
        </MenuIcon>
        <Logo src="/images/logo.svg" alt="logo" />
        <Nav>
          <ul>
            <li>
              <Form action="/">
                <input type="text" name="search" id="nav-search-input" placeholder="Search" />
              </Form>
            </li>
            <li><span>Categories</span></li>
            {!isLoggedIn
              ? (
                <>
                  <li><Button className="secondary">login</Button></li>
                  <li><Button>register</Button></li>
                </>
              )
              : (
                <li><IconButton icon="/icons/avatar.svg" onClick={() => {}} /></li>
              )}
          </ul>
        </Nav>
        <SearchIcon>
          <IconButton icon="/icons/search.svg" onClick={() => {}} />
        </SearchIcon>
      </Row>
    </Container>
  </Wrapper>
);

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
};

Navbar.defaultProps = {
  isLoggedIn: false,
};

export default Navbar;
