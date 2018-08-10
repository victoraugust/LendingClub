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
import Carousel from 'grommet/components/Carousel';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import DocumentPdfIcon from 'grommet/components/icons/base/DocumentPdf';
import Notification from 'grommet/components/Notification';

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
        <Notification
          message='If you are seeing this message, please refresh your page multiple times, new site has been deployed.'
          size='small'
        />
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
          colorIndex='light-2'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '1200px'}}
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
                <Label>What we have done in formatting:</Label>
                <List>
                  <ListItem justify='between' separator='horizontal'>
                    <span>
                      Convert int_rate from percentage string to decimal
                    </span>
                  </ListItem>
                  <ListItem justify='between'>
                    <span>
                      Convert revol_util from the percentage string to decimal
                    </span>
                  </ListItem>
                  <ListItem justify='between'>
                    <span>
                      Extract issue_mth and issue_year from issue_d
                    </span>
                  </ListItem>
                  <ListItem>
                    <span>Create a new column length_cr_hist using the earliest_cr_line and issue_d</span>
                  </ListItem>
                </List>
              </Box>
            </Tab>
            <Tab title='Variable Selection'>
              <Box align='center'>
                <Accordion style={{width: '80vw'}}>
                  <AccordionPanel heading='Select the columns we need for the model and EDA'>
                    <Box direction='row' justify='center' align='center'>
                      <Paragraph>
                        Every time when an investor purchases the notes from a loan, they will get a summary <Anchor icon={<DocumentPdfIcon size='small' />} href='./sample.pdf' /> of all the recorded information for that borrowers and the loan. We will only use these information for our model. We also include some helpful information, for example, "total_pymnt", for reference purpose.
                      </Paragraph>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='Loan_status: only keep the ones with fully-paid and charged-off'>
                    <Box direction='row' align='center' justify='center'>
                      <Image
                        src='/image/loan_status_count.png'
                        size='large'
                        style={{width: '45vw'}}
                      />
                      <Paragraph>
                        For modeling purposes, we only care about the loans that are either charge off or fully paid. Hence, we will remove the rows with other types of loan_status since we have no idea whether they will go defaults or not.
                      </Paragraph>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='Remove the borrowers with second applicants'>
                    <Box direction='row' justify='center' align='center'>
                      <Box>
                        <Paragraph>
                          Only 0.879% of the application is joint application. With the present of the second applicants, the borrowers who have a low grade can get a fairly low interest rate. Having a second applicant or not is a game changer. It creates some "outliers-like” points in some of our EDA plots. In order to simplify the model, we will drop the rows who have second applicants.
                        </Paragraph>
                        <Paragraph>
                          We use two ways of identifying the joint application. First, if the row doesn't have the sec_app_fico_range_low missing, it is an individual application. Second, if the application type is "Joint App", it is a joint application. We will drop whoever identify the more rows.
                        </Paragraph>
                      </Box>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='Drop the columns we no longer need'>
                    <Box direction='row' justify='center' align='center'>
                      <Paragraph>
                        application_type and sec_app_fico_range_low were used to identify the loans with second applicants. Since the joint applications have been identified and removed, these two columns are no longer needed.
                      </Paragraph>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='Final columns we have for df_sub'>
                  </AccordionPanel>
                </Accordion>
              </Box>
            </Tab>
            <Tab title='Missing Data'>
              <Box align='center'>
                <Accordion style={{width: '80vw'}}>
                  <AccordionPanel heading='Check any missing values in dataframe'>
                    <Box direction='row' justify='center' align='center'>
                      <Image
                        src='/image/missing_values.png'
                        size='large'
                        style={{width: '45vw'}}
                        />
                      <Paragraph>
                        Before handling the missing value, we have 1006533 rows. Some columns have way too many missing values, such as mths_since_last_delinq, open_rv_12m and open_rv_24m.
                      </Paragraph>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='Employment Title'>
                    <Box justify='center' align='center'>
                      <Paragraph>
                        Column `title` contain way too many types of titles. Almost each loan has a unique title. We can't use it for modeling. However, we later attempted to extract the most common words appeared in column title. More details can be found in feature engineering.
                      </Paragraph>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='open_rv_12m and open_rv_24m'>
                    <Box direction='row' justify='center' align='center'>
                      <Box>
                        <Paragraph>
                          open_rv_12m and open_rv_24m captures the number of revolving trades opened in past 12/24 months.
                        </Paragraph>
                        <Paragraph>
                          They have 724459 missing values. Our best guess is that they are missing at random: these borrowers have zero revolving trades open in the past 12/24 mths. We fill the missing value with 0. We may not use these variables for the model since it has way too many missing values.
                        </Paragraph>
                      </Box>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='mths_since_last_major_derog and mths_since_last_delinq'>
                    <Box justify='center' align='center'>
                      <Paragraph>
                        Similarly, we expect that mths_since_last_major_derog, mths_since_last_delinq and max_bal_bc have a huge number of missing value because the borrowers do not have that record. We may not use this variable as a predictor for the model. However, it is good to keep them for now for EDA purpose.
                      </Paragraph>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='revol_until'>
                    <Box justify='center' align='center'>
                      <Paragraph>
                        revol_util captures revolving line utilization rate, or the amount of credit the borrower is using relative to. We fill the missing value of revol_until with mean.
                      </Paragraph>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='inq_last_6mths'>
                    <Box justify='center' align='center'>
                      <Paragraph>
                        Column inq_last_6mths only contains 1 missing value, we filled it in with median value.
                      </Paragraph>
                      <Box direction='row' align='center'>
                        <Image
                          src='/image/inq_last_6mths.png'
                          size='large'
                          style={{width: '45vw'}}
                        />
                        <Paragraph>
                          Inq_last_6mths has less observations as number of inquiries decreases. According to the plot, we may consider group the number of inquiries into two or three groups if we want to use it as a predictor.
                        </Paragraph>
                      </Box>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='emp_length'>
                    <Box justify='center' align='center' direction='row'>
                      <Paragraph>
                        We don't know the reason that some emp_length is missing. It works the best to fill the NaN by randomly sample the years based on the frequencies of the category. After handling the missing values, the df_sub data frame has 1006533 observations. We didn’t drop a single row during the process of handling the missing value.
                      </Paragraph>
                      <Image
                        src='/image/emp_length.png'
                        size='large'
                        style={{width: '45vw'}}
                      />
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel heading='pub_rec_bankruptcies'>
                    <Box align='center' justify='center' direction='row'>
                      <Paragraph>
                        pub_rec_bankruptcies has around 600 missing values. 0 is the most common value for pub_rec_bankruptcies, much higher than other categories. Hence, the missing values are filled with 0.
                      </Paragraph>
                      <Carousel autoplay={false} infinite={false} style={{width: '45vw'}}>
                        <Image
                          src='/image/counterplotpub_rec_bankruptciesBefore.png'
                          size='large'
                        />
                        <Image
                          src='/image/counterplotpub_rec_bankruptciesAfter.png'
                          size='large'
                        />
                      </Carousel>
                    </Box>
                  </AccordionPanel>
                </Accordion>
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
              <Tab title='Annual Income'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/grade_log_annual_income_loan_status.png'
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
              <Tab title='Fico'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/fico_grade_loan_status.png'
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
              <Tab title='Interest Rate'>
                <Box align='center' direction='row' justify='center'>
                  <Carousel autoplay={false} infinite={false} style={{width: '45vw'}}>
                    <Image
                      src='/image/sub_grade_interest_rate_outliers.png'
                      size='large'
                    />
                    <Image
                      src='/image/sub_grade_interest_rate.png'
                      size='large'
                    />
                  </Carousel>
                  <Image
                    src='/image/year_interest_rate_by_grade.png'
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
              <Tab title='Payment Ratio'>
                <Box align='center' direction='row' justify='center'>
                  <Image
                    src='/image/payment_ratio_charged_off.png'
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
