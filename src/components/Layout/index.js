<<<<<<< HEAD
import React from "react";
import Menu from "../Menu";
import "./styles.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />

      <div className="Layout-content">{children}</div>
    </div>
  );
};

export default Layout;
=======
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../Menu';
import './styles.css';
import { clearError } from '../../actions/index';
import { Message } from 'semantic-ui-react';

const Layout = ({ children }) => {
  const errorMessage = useSelector((state) => state.ui.error);
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  }

  return (
    <div>
      <Menu />
      {errorMessage && (
        <div className="wrapper">
          <Message
            onDismiss={handleDismiss}
            content={errorMessage}
            color="red"
          />
        </div>
      )}
      <div className="Layout-content">{children}</div>
    </div>
  );
}

export default Layout;
>>>>>>> 0afc624823764ea89d3656938073973be232f57c
