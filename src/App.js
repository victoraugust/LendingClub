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
import DownIcon from 'grommet/components/icons/base/Down';
import BarChartIcon from 'grommet/components/icons/base/BarChart';
import Animate from 'grommet/components/Animate';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';

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
      <GrommetApp centered={false}>
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
          <Footer justify='center' style={{ position: 'absolute', bottom: 0}}>
            <Box direction='column' align='center'>
              scroll down to start
              <DownIcon />
            </Box>
          </Footer>
        </Box>

        <Section
          direction='row'
          full={true}
          colorIndex='neutral-1'
          appCentered={true}
          justify='center'
          align='center'
          wrap={true}
        >
          <Box align='start' pad='medium'>
            <Heading tag='h1' strong={true}>What is Lending Club?</Heading>
            <Heading tag='h3'>And why we choosed this project.</Heading>
            <Paragraph size='medium'>
              Lending Club is the world’s leading online marketplace that allows borrowers and investors to connect. The platform uses technology to operate a credit marketplace at a lower cost than traditional bank loan programs. Lending Club brings borrowers and lenders together and acts as broker, performing such functions as screening borrowers, facilitating the transactions, and keeping track of loans during the loan lifetimes. Investors purchase Notes (which correspond to fractions of loans) with a goal of getting a return on investment from interest payments and principal repayment. Borrowers that apply to Lending Club typically take out loans to consolidate debt, improve their homes and finance major purchases. Lending Club’s mission is to transform the peer-to- peer loan industry to make it more transparent, efficient, and customer-friendly.
              Lending Club has a large repository of data on past and current loans that we can use for our modeling. Each loan has a lot of factors that describe the borrower, such as his or her annual income, the purpose of the loan and the total number of credit lines opened by the borrower. Exploratory data analysis will help determine which factors are appropriate to be used for modeling.
            </Paragraph>
          </Box>
          <Box pad='large'>
            <BarChartIcon size='huge' colorIndex='light-1' />
          </Box>
        </Section>

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
