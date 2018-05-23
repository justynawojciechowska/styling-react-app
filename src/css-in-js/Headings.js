import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  h2: {
    display: 'inline-block',
    fontSize: '2em',
    fontWeight: 'normal',
    margin: '20px 0 40px',
    position: 'relative',
    ':after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -10,
      width: 60,
      height: 5,
      background: '#00d69e',
    }
  }
});

export default function H2(props) {
  return <h2 className={ css(styles.h2) }>{ props.children }</h2>;
}
