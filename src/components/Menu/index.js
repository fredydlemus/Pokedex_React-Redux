import React from 'react';
import { Menu as SemanticMenu, Container, Image } from 'semantic-ui-react';
import logo from '../../statics/images/pokeball.png';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
      <SemanticMenu fixed="top">
        <Container>
          <SemanticMenu.Item to="/">
            <Image src={logo} />
          </SemanticMenu.Item>

          <Link to={'/'}>
          <SemanticMenu.Item>Home</SemanticMenu.Item>
          </Link>
          <SemanticMenu.Item to="/" position="right">
            Favorites
          </SemanticMenu.Item>
        </Container>
      </SemanticMenu>
    );
}

export default Menu;