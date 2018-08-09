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
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';

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
          <Box align='start' pad='large'>
            <Heading tag='h1' strong={true}>What is Lending Club?</Heading>
            <Heading tag='h3'>And why we chose this project.</Heading>
            <Paragraph size='medium'>
              Lending Club is the world’s leading online marketplace that allows borrowers and investors to connect. The platform uses technology to operate a credit marketplace at a lower cost than traditional bank loan programs. Lending Club brings borrowers and lenders together and acts as broker, performing such functions as screening borrowers, facilitating the transactions, and keeping track of loans during the loan lifetimes. Investors purchase Notes (which correspond to fractions of loans) with a goal of getting a return on investment from interest payments and principal repayment. Borrowers that apply to Lending Club typically take out loans to consolidate debt, improve their homes and finance major purchases. Lending Club’s mission is to transform the peer-to- peer loan industry to make it more transparent, efficient, and customer-friendly.
              Lending Club has a large repository of data on past and current loans that we can use for our modeling. Each loan has a lot of factors that describe the borrower, such as his or her annual income, the purpose of the loan and the total number of credit lines opened by the borrower. Exploratory data analysis will help determine which factors are appropriate to be used for modeling.
            </Paragraph>
          </Box>
          <Box pad='large'>
            <BarChartIcon size='huge' colorIndex='light-1' />
          </Box>
        </Section>

        <Section
          direction='column'
          full={true}
          colorIndex='light-2'
          appCentered={true}
          justify='center'
          align='center'
          wrap={true}
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Data Cleaning</Heading>
            <Heading tag='h3'>We dive into LendingClub's public database.</Heading>
          </Box>
          <Box full='horizontal'>
          <Tabs>
            <Tab title='Merging'>
              <Box align='start' justify='center' direction='row' full='horizontal'>
                <Box pad='large'>
                  <Paragraph>
                    Prior to data cleaning, the data sets were merged to encompass a range of data from 2011-2017. To preserve the original copy of the data, twelve data sets were copied and then merged.
                    To verify that the column names were identical in each data frame, the columns were counted and printed to visually see if they were matching. The combined datasets were stored into a new CSV file that would be referenced when data cleaning.
                  </Paragraph>
                </Box>
                <Box pad='large'>
                  <AnnotatedMeter
                    legend={true}
                    size='medium'
                    type='bar'
                    max={1765451}
                    series={[
                      {"label": "LoanStats_2007-2011", "value": 42538, "colorIndex": "neutral-1"},
                      {"label": "LoanStats_2012-2013", "value": 188183, "colorIndex": "neutral-3"},
                      {"label": "LoanStats_2014", "value": 235631, "colorIndex": "accent-2"},
                      {"label": "LoanStats_2015", "value": 421097, "colorIndex": "graph-2"},
                      {"label": "LoanStats_2016", "value": 434415, "colorIndex": "accent-1"},
                      {"label": "LoanStats_2017", "value": 443587, "colorIndex": "graph-3"}
                    ]}
                  />
                </Box>
              </Box>
            </Tab>
            <Tab title='Formatting'>
              <Box align='center'>
                <Paragraph>
                  In this part, we first convert the format of interest rate, revol_utli from percentage string to decimal. When reading the merged dataset CSV file, it was noticed that the interest rate was in percentage form (i.e.: 11.99%). This format for the interest rate would potentially cause problems during EDA since the datatype was an object string type instead of a float. To convert these numbers into decimal values, the “%” sign was stripped and then the number was converted into a float and divided by 100. Now the value would be 0.1199 as a datatype of a float value. Another column that mimicked a similar issue was the revol_util.
                  issue_d contains the data of both month and year of the loans are issued. It works better as a datetime object. The issue year is extracted and stored in the new column issue_year. It can be a powerful predictor related to the economic condition at that period of time. Moreover, we are interested in the borrowers' length of credit history at the time when applied for the loan. earliest_cr_line records the earliest credit line at the time of application for the borrowers. This record by itself doesn't contribute to the model, but the length of credit history can be a good predictor for our model. It is calculated by subtracting earliest_cr_line from issue_d.
                </Paragraph>
              </Box>
            </Tab>
            <Tab title='Variable Selection'>
              <Box align='center'>
                <Paragraph>
                  Since our goal for this project is predicting whether a certain loan will end up "Charged Off" or "Fully Paid" and providing suggestions for the investors what loans they should invest in, we cannot use the variables that are not available for the investors when they are making investment decision. For example, we cannot use last_fico_range_high in our model because the Lending Club has kept updating the borrowers' current fico score in this column. The investors can only evaluate fico_range_high, the fico score of the borrowers at the time they applied for the loans. Hence, during the variable selection, we make sure that we have selected all the information that are available to the investors during investment decision making, the response variable, loan_status, and some potentially useful records, such as total_pymnt, total_pymnt, total_rec_prncp, and total_rec_int.
                  When understating the what the values in each column represented, there were some columns that were recognized as non-adding information to the dataset. For example, sec_app_fico_range_low and application_type are two columns that were dropped since it did not add value as a predictor in the model. In addition, since the focus of the project is to analyze between fully-paid and charged-off, other unique variables in the loan_status were dropped to clean the data.
                </Paragraph>
              </Box>
            </Tab>
            <Tab title='Missing Data'>
              <Box align='center'>
                <Paragraph>
                  First of all, during data exploration, it is noticed that 25 rows have missing values for all the columns. We identify these rows by looking for the rows with their loan amount missing. Since these don’t provide any value to the model, they were dropped. Likewise, rows with dti (debt to income ratio) missing were removed since dti is a crucial predictor for the model. What's more, some columns have, such as mths_since_last_major_derog and mths_since_last_delinq, missing value at random. Our best guess is that they are missing because the borrowers don't have that record. Moreover, for some variables that have way too many categories, for example, title, we don't think it is necessary to deal with the missing value and simply drop the column. Moreover, for emp_length, we don't know the reason for missing. We decide to fill in the missing values by randomly sample the years based on the frequencies of the category. In addition, revol_until was investigated and filled in the missing values since it is a predictor in the model.
                </Paragraph>
              </Box>
            </Tab>
            <Tab title='Outliers'>
              <Box align='center'>
                <Paragraph>
                  During the EDA, some outliers and strange data points were observed. After being investigated each of them the outliers were identified and removed to enhance the model. In addition, to simply the dataframe, for verification_status the 'Source Verified' and 'Verified' were combined to "Verified". Finially, int_rate equal to 0.06 was removed since it was an outlier in the model.
                </Paragraph>
              </Box>
            </Tab>
          </Tabs>
          </Box>
        </Section>

        <Section
          direction='column'
          full={true}
          colorIndex='grey-2'
          appCentered={true}
          justify='center'
          align='center'
          wrap={true}
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Feature Engineering</Heading>
            <Heading tag='h3'>Prepare our data for modeling.</Heading>
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
