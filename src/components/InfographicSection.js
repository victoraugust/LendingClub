import React from 'react';
import Section from 'grommet/components/Section';

export default class InfographicSection extends React.Component {
  render() {
    return (
      <Section
        {...this.props}
        className={this.props.className}
        appCentered={true}
        justify="center"
        align="center"
        full={true}
        pad={{vertical: "large"}}
      >
        {this.props.children}
      </Section>
    );
  }
};
