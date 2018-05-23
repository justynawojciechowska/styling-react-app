import React, { Component } from 'react';
import Button from './Button/Button';
import H2 from './Headings/Headings';
import styles from './css-modules.css';

class CSSModules extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <H2>Css Modules</H2>
        <Button>I am styled with Css modules</Button>
      </div>
    );
  }
}

export default CSSModules;
