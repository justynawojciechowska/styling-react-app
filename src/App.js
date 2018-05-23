import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import StyledComponents from './styled-components/styled-components';
import CSSinJS from './css-in-js/css-in-js';
import CSSModules from './css-modules/css-modules';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={ styles.dashboard }>
        <Router>
          <Fragment>
            <ul className={ styles['dashboard__list'] }>
              <li className={ styles['dashboard__elem'] }>
                <NavLink
                  className={ styles['dashboard__link'] }
                  to="/styled-components"
                  activeClassName="active">
                  <img
                    className={ styles['dashboard__icon'] }
                    src="https://10clouds.com/wp-content/themes/thegem/dist/images/happy-clients.svg" alt=""/>
                  Styled components
                </NavLink>
              </li>
              <li className={ styles['dashboard__elem'] }>
                <NavLink
                  className={ styles['dashboard__link'] }
                  to="/css-in-js"
                  activeClassName="active">
                  <img
                    className={ styles['dashboard__icon'] }
                    src="https://10clouds.com/wp-content/themes/thegem/dist/images/business.svg" alt=""/>
                  CSS-in-JS
                </NavLink>
              </li>
              <li className={ styles['dashboard__elem'] }>
                <NavLink
                  className={ styles['dashboard__link'] }
                  to="/css-modules">
                  <img
                    className={ styles['dashboard__icon'] }
                    src="https://10clouds.com/wp-content/themes/thegem/dist/images/office.svg" alt=""/>
                  CSS-modules
                </NavLink>
              </li>
            </ul>
            <Route exact path="/" component={ () => <Redirect to="/"/> }/>
            <Route exact path="/styled-components" component={ StyledComponents }/>
            <Route exact path="/css-in-js" component={ CSSinJS }/>
            <Route exact path="/css-modules" component={ CSSModules }/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
