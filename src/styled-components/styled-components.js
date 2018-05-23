import React, { Component } from 'react';
import Button from './Button';
import H2 from './Headings'
import styled, { injectGlobal } from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

injectGlobal`
  html {
    --green: #00d69e;
    --violet: #5e1fe4;
    --darkBlue: #0B0618;
  }
`;

class StyledComponents extends Component {

  state = {
    buttonClicked: false,
  }

  handleClick = () => {
    this.setState({ buttonClicked: !this.state.buttonClicked });
  }

  render() {
    return (
      <Container>
        <H2>Styled components</H2>
        <Button onClick={ this.handleClick }
                buttonClicked={ this.state.buttonClicked }>{ this.state.buttonClicked ? 'Styled-component clicked' : 'Hello styled-component' }</Button>
      </Container>
    );
  }
}

export default StyledComponents;
