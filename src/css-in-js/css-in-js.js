import React, { Component } from 'react';
import Button from './Button';
import H2 from './Headings';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  }
});

class CSSinJS extends Component {
  render() {
    return (
      <div className={ css(styles.container) }>
        <H2>CSS-in-JS</H2>
        <Button>I am css-in-js</Button>
      </div>
    );
  }
}

export default CSSinJS;
