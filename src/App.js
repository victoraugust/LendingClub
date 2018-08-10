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
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import AddIcon from 'grommet/components/icons/base/Add';
import GrowIcon from 'grommet/components/icons/base/Grow';
import BarChartIcon from 'grommet/components/icons/base/BarChart';
import Animate from 'grommet/components/Animate';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import Image from 'grommet/components/Image';
import Markdown from 'grommet/components/Markdown';

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
          full={true}
          justify='center'
          align='center'
          wrap={true}
          colorIndex={this.state.showNav ? 'light-2' : 'light-1'}
          pad='large'
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
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '800px'}}
          pad='large'
        >
          <Box align='start'>
            <Heading tag='h1' strong={true}>What is Lending Club?</Heading>
            <Heading tag='h3'>And why we chose this project.</Heading>
            <Paragraph size='medium'>
              Lending Club is the world’s leading online marketplace that allows borrowers and investors to connect. This platform uses technology to bring borrowers and lenders together and acts as broker, performing such functions as screening borrowers, facilitating the transactions, and keeping track of loans during the loan lifetimes. Investors purchase Notes (which correspond to fractions of loans) with a goal of getting a return on investment from interest payments and principal repayment. Borrowers that apply to Lending Club typically take out loans to consolidate debt, improve their homes and finance major purchases.

              The project goal is to create a service that helps investors make better decisions when choosing which Lending Club notes to invest in. Specifically, our model will predict whether individual notes offered by Lending Club will be fully paid or charged off by a classification algorithm with Loan Status as the response variable. It is important to predict what notes will be charged off or not to give investors useful insight into potential performance of individual notes and their overall portfolio. Currently investors have the option of relying on Lending Club grade and sub grade system to gauge whether a borrower will default. We want to make a service that the investors can use to predict which loans will be fully paid in particular sub grades. If our model is more predictive at selecting fully paid loans than a random draw, then it will be a valuable service for investors.
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
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '800px'}}
          pad='large'
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Data Cleaning</Heading>
            <Heading tag='h3'>We dive into LendingClub's public database.</Heading>
          </Box>
          <Box full='horizontal'>
            <Tabs>
            <Tab title='Merging'>
              <Box align='start' justify='center' direction='row' full='horizontal'>
                <Box>
                  <Paragraph>
                    Prior to data cleaning, the data sets were merged to encompass a range of data from 2011-2017. To preserve the original copy of the data, twelve data sets were copied and then merged.
                    To verify that the column names were identical in each data frame, the columns were counted and printed to visually see if they were matching. The combined datasets were stored into a new CSV file that would be referenced when data cleaning.
                  </Paragraph>
                  <Paragraph>
                    The importance of data merging is to ensure that maximized datasets are incorporated in our future engineering and models. By using data from a range of years, we are able extract variety of information throughout past history and hence have a better possibility of our models performing well when determining what loans could potentially be charged off.
                  </Paragraph>
                </Box>
                <Box pad='medium'>
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
                  <Markdown content="In this part, we first convert the format of interest rate, `revol_utli` from percentage string to decimal. When reading the merged dataset CSV file, it was noticed that the interest rate was in percentage form (i.e.: `11.99%`). This format for the interest rate would potentially cause problems during EDA since the datatype was an object string type instead of a float. To convert these numbers into decimal values, the `%` sign was stripped and then the number was converted into a float and divided by `100`. Now the value would be `0.1199` as a datatype of a float value. Another column that mimicked a similar issue was the `revol_util`." />
                </Paragraph>
                <Paragraph>
                  <Markdown content="`issue_d` contains the data of both month and year of the loans are issued. It works better as a datetime object. The issue year is extracted and stored in the new column `issue_year`. It can be a powerful predictor related to the economic condition at that period of time. Moreover, we are interested in the borrowers' length of credit history at the time when applied for the loan. `earliest_cr_line` records the earliest credit line at the time of application for the borrowers. This record by itself doesn't contribute to the model, but the length of credit history can be a good predictor for our model. It is calculated by subtracting `earliest_cr_line` from `issue_d`." />
                </Paragraph>
              </Box>
            </Tab>
            <Tab title='Variable Selection'>
              <Box align='center'>
                <Paragraph>
                  <Markdown content="Since our goal for this project is predicting whether a certain loan will end up **Charged Off** or **Fully Paid** and providing suggestions for the investors what loans they should invest in, we cannot use the variables that are not available for the investors when they are making investment decision. For example, we cannot use `last_fico_range_high` in our model because the Lending Club has kept updating the borrowers' current fico score in this column. The investors can only evaluate `fico_range_high`, the fico score of the borrowers at the time they applied for the loans. Hence, during the variable selection, we make sure that we have selected all the information that are available to the investors during investment decision making, the response variable, `loan_status`, and some potentially useful records, such as `total_pymnt`, `total_pymnt`, `total_rec_prncp`, and `total_rec_int`." />
                </Paragraph>
                <Paragraph>
                  <Markdown content="When understating the what the values in each column represented, there were some columns that were recognized as non-adding information to the dataset. For example, `sec_app_fico_range_low` and `application_type` are two columns that were dropped since it did not add value as a predictor in the model. In addition, since the focus of the project is to analyze between fully-paid and charged-off, other unique variables in the `loan_status` were dropped to clean the data." />
                </Paragraph>
              </Box>
            </Tab>
            <Tab title='Missing Data'>
              <Box align='center'>
                <Paragraph>
                  <Markdown content="First of all, during data exploration, it is noticed that `25` rows have missing values for all the columns. We identify these rows by looking for the rows with their loan amount missing. Since these don’t provide any value to the model, they were dropped. Likewise, rows with `dti` (debt to income ratio) missing were removed since `dti` is a crucial predictor for the model. What's more, some columns have, such as `mths_since_last_major_derog` and `mths_since_last_delinq`, missing value at random. Our best guess is that they are missing because the borrowers don't have that record. Moreover, for some variables that have way too many categories, for example, title, we don't think it is necessary to deal with the missing value and simply drop the column. Moreover, for `emp_length`, we don't know the reason for missing. We decide to fill in the missing values by randomly sample the years based on the frequencies of the category. In addition, `revol_until` was investigated and filled in the missing values since it is a predictor in the model." />
                </Paragraph>
              </Box>
            </Tab>
            <Tab title='Outliers'>
              <Box align='center'>
                <Paragraph>
                  <Markdown content="During the EDA, some outliers and strange data points were observed. After being investigated each of them the outliers were identified and removed to enhance the model. In addition, to simply the dataframe, for `verification_status` the 'Source Verified' and 'Verified' were combined to 'Verified'. Finially, `int_rate` equal to `0.06` was removed since it was an outlier in the model." />
                </Paragraph>
              </Box>
            </Tab>
          </Tabs>
          </Box>
        </Section>

        <Section
          direction='column'
          full={true}
          colorIndex='light-1'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '800px'}}
          pad='large'
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Exploratory Data Analysis</Heading>
            <Heading tag='h3'>Prepare our data for modeling.</Heading>
          </Box>
          <Box full='horizontal'>
            <Tabs>
              <Tab title='Emp_Length'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/emp_length_loan_status_before.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                  <LinkNextIcon size='large' />
                  <Image
                    src='/image/emp_length_loan_status_after.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='Dti'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/dti_grade_loan_status.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='Fico'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/fico_grade_loan_status.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='Payment Ratio'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/payment_ratio_charged_off.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='Loan Purpose'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/loan_purpose_loan_status_before.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                  <LinkNextIcon size='large' />
                  <Image
                    src='/image/loan_purpose_loan_status_after.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='Revol Util'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/grade_revol_util_loan_status.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='Home Ownership'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/home_ownership_loan_status_before.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                  <LinkNextIcon size='large' />
                  <Image
                    src='/image/home_ownership_loan_status_after.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='Annual Income'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/grade_log_annual_income_loan_status.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='Interest Rate'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/sub_grade_interest_rate.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                  <AddIcon size='large' />
                  <Image
                    src='/image/year_interest_rate_by_grade.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='States'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/states_loan_status_before.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                  <LinkNextIcon size='large' />
                  <Image
                    src='/image/states_loan_status_after.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
              <Tab title='Term'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/grade_loan_by_term.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                </Box>
              </Tab>
            </Tabs>
          </Box>
        </Section>

        <Section
          direction='column'
          full={true}
          colorIndex='light-2'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '800px'}}
          pad='large'
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Models</Heading>
            <Heading tag='h3'>Our models.</Heading>
          </Box>
        </Section>

        <Section
          direction='row'
          full={true}
          colorIndex='neutral-1'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '800px'}}
          pad='large'
        >
          <Box>
            <GrowIcon size='huge' colorIndex='ok' />
          </Box>
          <Box align='start'>
            <Heading tag='h1' strong={true}>Final Result and thoughts</Heading>
            <Heading tag='h3'>What we learned from this project.</Heading>
          </Box>
        </Section>

        <Section
          direction='row'
          full={true}
          colorIndex='grey-1'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '1200px'}}
          pad='large'
        >
          <Box align='start'>
            <Heading tag='h1' strong={true}>About Discrimination</Heading>
            <Heading tag='h3'>Why is Discrimination an issue?</Heading>
            <Paragraph>
              Although lenders now make good-faith determination in a borrower’s ability to afford a loan, lending discrimination hasn’t been eliminated. Lending discrimination occurs when a lender takes certain protected personal characteristics into account when denying a loan or imposing unfair terms on loans. Preliminary studies have shown that people of color pay higher interest rates than the people identifying themselves in the “white” community. In addition, young borrowers with lower education or women of color receive the highest rates. Although the federal Equal Credit Opportunity Act (ECOA) prohibits lenders from discriminating on the basis of race, religion, sex, age, lending discrimination still remains a challenge to be solved in the marketplace. In addition, unequal treatment of minorities regarding race, gender and age are not just motivated by racism but also lower creditworthiness or other economic disparities.
            </Paragraph>
            <Heading tag='h3'>Any Discrimination in Lending Club?</Heading>
            <Paragraph>
              Although Lending Club makes investors promise to not violate borrower discrimination laws, it is still an unfair practice.  Even with the limited demographic information, Lending Club provides the first three digits of the borrower’s zipcode which can reveal the geographic location to the investor. They can then make a guess of the distribution of various groups in that location which can give some probability of the borrower’s race. In addition, in 2009 Lending Club’s SEC filings provided investors with information about the borrower’s hometown, current location and a message that might have included phrases like “my husband” or “my wife” in which indirectly disclosed their gender and marital status.
            </Paragraph>
            <Heading tag='h3'>Future Work?</Heading>
            <Paragraph>
              Our modeling will not directly track discrimination practices by Lending Club, since the analysis is not based on declined loans or any information regarding the borrower’s race, age, or gender. Although Lending Club doesn’t reveal borrower’s race, age, or gender these attributes can be voluntarily reveal through the demographics. For future models, we can investigate locations based on the zip codes and look for potential discriminations by lenders. In addition, we can investigate decline loans and see if there is any connection between them and the locations from where they come from.
            </Paragraph>
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
