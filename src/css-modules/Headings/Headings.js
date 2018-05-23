import React from 'react';
import styles from './Headings.css';

export default function H2(props) {
  return <h2 className={ styles.heading }>{ props.children }</h2>;
}
