import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  buttonStyles: {
    background: 'transparent',
    border: '2px solid #00d69e',
    color: '#00d69e',
    cursor: 'pointer',
    display: 'block',
    fontSize: '1.2em',
    margin: '20px auto 50px',
    padding: '10px 50px',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      margin: '10px 0 30px'
    }
  },
  hover: {
    ':hover': {
      color: 'white',
      backgroundColor: '#00d69e'
    }
  },
  focus: {
    ':focus': {
      outline: 'none',
    }
  }
});

export default function Button(props) {
  return <button className={ css(styles.buttonStyles, styles.focus, styles.hover) }>{ props.children }</button>;
}
