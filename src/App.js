import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Sidebar from 'grommet/components/Sidebar';
import Title from 'grommet/components/Title';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import AppsIcon from 'grommet/components/icons/base/Apps';
import CloseIcon from 'grommet/components/icons/base/Close';
import Animate from 'grommet/components/Animate';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
  }
  render() {
    return (
      <GrommetApp centered={false} inline={true}>
        <Box
          appCentered={true}
          full={true}
          justify='center'
          align='center'
          wrap={true}
          colorIndex={this.state.showNav ? 'light-2' : 'light-1'}
        >
          <Heading strong={true} uppercase={true} align='center' margin='large'>
            Lending Club Final Project
          </Heading>
         <Label>Group 16</Label>
        </Box>

        <Button
          icon={this.state.showNav ? <CloseIcon /> : <AppsIcon />}
          onClick={() => this.setState({showNav: !this.state.showNav})}
          style={{position: 'fixed', top: 0, left: 0, zIndex: 1000}}
          />
          <Animate
            visible={this.state.showNav}
            enter={{"animation": "slide-right", "duration": 300, "delay": 0}}
            leave={{"animation": "slide-right", "duration": 300, "delay": 0}}
            style={{position: 'fixed', top: 0, left: 0}}
          >
            <Sidebar colorIndex='light-1' fixed={true} full={true} size='large'>
            <Header pad='large' justify='between'>
              <Title>
                Lending Club Final Project
              </Title>
            </Header>
            <Box flex='grow' justify='start'>
              <Menu primary={true}>
                <Anchor href='#' className='active'>
                  Introduction
                </Anchor>
                <Anchor href='#'>
                  EDA
                </Anchor>
                <Anchor href='#'>
                  Models
                </Anchor>
                <Anchor href='#'>
                  Final Results
                </Anchor>
              </Menu>
            </Box>
            </Sidebar>
          </Animate>

      </GrommetApp>
    );
  }
}

export default App;
