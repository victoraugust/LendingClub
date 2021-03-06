import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Animate from 'grommet/components/Animate';
import Button from 'grommet/components/Button';
import DownIcon from 'grommet/components/icons/base/Down';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import GrowIcon from 'grommet/components/icons/base/Grow';
import BarChartIcon from 'grommet/components/icons/base/BarChart';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import Image from 'grommet/components/Image';
import Carousel from 'grommet/components/Carousel';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import DocumentPdfIcon from 'grommet/components/icons/base/DocumentPdf';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import FavoriteIcon from 'grommet/components/icons/base/Favorite';
import GroupIcon from 'grommet/components/icons/base/Group';
import Quote from 'grommet/components/Quote';


import pdf from './sample.pdf';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPeople: false
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
          colorIndex='light-1'
          pad='large'
        >
          <Heading strong={true} uppercase={true} align='center' margin='large'>
            Lending Club Final Project
          </Heading>
          <Label>Group 16</Label>
          <Footer justify='center' style={{ position: 'absolute', bottom: 0}}>
            <Button
          icon={<GroupIcon style={{position: 'absolute', bottom: 10, left: '10px', zIndex: 1000}}/>}
          onClick={() => {this.setState({showPeople: !this.state.showPeople});}}
          />
            <Animate
                visible={this.state.showPeople}
                enter={{"animation": "fade", "duration": 1000, "delay": 0}}
                       leave={{"animation": "fade", "duration": 1000, "delay": 0}}
              style={{position: 'absolute', bottom: 10, left: '40px', zIndex: 1000}}
                       keep={true}
              >
              <Paragraph style={{margin: 0}}>
                    Made with <FavoriteIcon colorIndex='critical' size='xsmall' /> by Alexander Demidov, Yang Zeng, Mier Chen, Kopal Jain
                  </Paragraph>
              </Animate>

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
          direction='row'
          colorIndex='light-2'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '800px'}}
          pad='large'
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Data Merging</Heading>
            <Heading tag='h3'>Combine all the data we can use.</Heading>
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
          </Box>
        </Section>

        <Section
          direction='row'
          colorIndex='light-1'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '800px'}}
          pad='large'
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Data Formatting</Heading>
            <Heading tag='h3'>Clean up the raw data.</Heading>
            <Box align='start' justify='center' direction='row' full='horizontal'>
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
            </Box>
          </Box>
        </Section>

        <Section
          direction='row'
          colorIndex='light-2'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '800px'}}
          pad='large'
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Variable Selection</Heading>
            <Heading tag='h3'>Choose which predictors to use in our models.</Heading>
            <Box full='horizontal' pad='medium'>
              <Tabs>
                <Tab title='Initial Selection'>
                  <Box direction='row' justify='center' align='center'>
                    <Paragraph>
                      Every time when an investor purchases the notes from a loan, they will get a summary <Anchor href={pdf} icon={<DocumentPdfIcon size='small' />}></Anchor> of all the recorded information for that borrowers and the loan. We will only use these information for our model. We also include some helpful information, for example, "total_pymnt", for reference purpose.
                    </Paragraph>
                  </Box>
                </Tab>
                <Tab title='Loan Status'>
                  <Box direction='column' align='center' justify='center'>
                    <Label>Only keep the ones with fully-paid and charged-off</Label>
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
                  </Box>
                </Tab>
                <Tab title='Second Applicants'>
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
                </Tab>
                <Tab title='Drop Useless Ones'>
                  <Box direction='row' justify='center' align='center'>
                    <Paragraph>
                      application_type and sec_app_fico_range_low were used to identify the loans with second applicants. Since the joint applications have been identified and removed, these two columns are no longer needed.
                    </Paragraph>
                  </Box>
                </Tab>
              </Tabs>
            </Box>
          </Box>
        </Section>

        <Section
          direction='row'
          colorIndex='light-1'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '800px'}}
          pad='large'
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Missing Data</Heading>
            <Heading tag='h3'>We handled differently for different predictors.</Heading>
            <Box full='horizontal' pad='medium'>
              <Tabs>
                <Tab title='Employment Title'>
                  <Box justify='center' align='center' direction='row'>
                    <Paragraph>
                      Column `title` contain way too many types of titles. Almost each loan has a unique title. We can't use it for modeling. However, we later attempted to extract the most common words appeared in column title. More details can be found in feature engineering.
                    </Paragraph>
                    <Image
                      src='/image/emp_title.png'
                      size='large'
                      style={{width: '45vw'}}
                    />
                  </Box>
                </Tab>
                <Tab title='open_rv_X'>
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
                </Tab>
                <Tab title='mths_since_last_X'>
                  <Box justify='center' align='center'>
                    <Paragraph>
                      Similarly, we expect that mths_since_last_major_derog, mths_since_last_delinq and max_bal_bc have a huge number of missing value because the borrowers do not have that record. We may not use this variable as a predictor for the model. However, it is good to keep them for now for EDA purpose.
                    </Paragraph>
                  </Box>
                </Tab>
                <Tab title='revol_until'>
                  <Box justify='center' align='center'>
                    <Paragraph>
                      revol_util captures revolving line utilization rate, or the amount of credit the borrower is using relative to. We fill the missing value of revol_until with mean.
                    </Paragraph>
                  </Box>
                </Tab>
                <Tab title='inq_last_6mths'>
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
                </Tab>
                <Tab title='emp_length'>
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
                </Tab>
                <Tab title='pub_rec_bankruptcies'>
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
                </Tab>
              </Tabs>
            </Box>
          </Box>
        </Section>

        <Section
          direction='column'
          colorIndex='light-2'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '1000px'}}
          pad='large'
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Exploratory Data Analysis</Heading>
            <Heading tag='h3'>Prepare our data for modeling.</Heading>
          </Box>
          <Box full='horizontal' pad='medium'>
            <Tabs>
              <Tab title='Annual Income'>
                <Box direction='column' justify='center' align='center'>
                  <Box align='center' direction='row' justify='center'>
                    <Image
                      src='/image/grade_log_annual_income_loan_status.png'
                      size='large'
                      style={{width: '45vw'}}
                    />
                  </Box>
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Grade vs. Log Value of Annual Income plot for charged off and fully paid loans indicates how annual income affects if a borrower’s loan will be charged off or fully paid. This plot further investigates a possible trend among grades (A to G). Although Grade A shows slightly higher annual income than the rest of the grades, there is no significant difference between all the grades when it comes to annual income. However, borrowers with higher income will more likely pay the full loan while borrowers with lower income will most likely be charged off, despite of what grade the borrower belongs in. Hence annual income may have some predictive value in the model.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Dti'>
                <Box direction='column' justify='center' align='center'>
                  <Box align='center' direction='row' justify='center'>
                    <Image
                      src='/image/dti_grade_loan_status.png'
                      size='large'
                      style={{width: '45vw'}}
                    />
                  </Box>
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Grade vs. Dti plot for charged off and fully paid loans indicates how dti (debt to income ratio) affects if a borrower’s loan will be charged off or fully paid. This plot further investigates a possible trend among grades (A to G). As the grade decreases from A to G, the amount of dti increases. In addition, borrowers with higher dti will more likely have a charged off loan while borrowers with lower dti will more likely have a fully paid loan, despite of what grade the borrower belongs in. Hence dti variable may have some predictive value in the model.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Emp_Length'>
                <Box direction='column' justify='center' align='center'>
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
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Employment Length vs. Number of Loans counter plot for charged off and fully paid loans indicates how employment duration affects if a borrower’s loan will be charged off or fully paid. Future engineering was conducted on original data to group employment length into larger categories of 0-1, 2-4, 5-9, and 10+  years. The plots show that there is significant amount of data under each category of employment group. In addition, most of the borrowers that participate in Lending Club have employment for over 10 years. Despite the employment length, there are more fully paid loans than charged of loans. Hence employment length may have some predictive value in the model.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Emp_Title'>
                <Box direction='column' justify='center' align='center'>
                  <Box align='center' direction='row' justify='center'>
                    <Image
                      src='/image/emp_title.png'
                      size='large'
                      style={{width: '45vw'}}
                    />
                  </Box>
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Employment Title vs. Number of Loans counter plot for charged off and fully paid loans indicates how employment title affects if a borrower’s loan will be charged off or fully paid. This plot shows that there is data recorded under a diverse amount of employment title types. In addition, most of the borrowers that participate in Lending Club are employed as a manager or other professions than the ones listed in the x-axis. Despite the employment title, there are more fully paid loans than charged of loans. Hence employment title may have some predictive value in the model.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Fico'>
                <Box direction='column' justify='center' align='center'>
                  <Box align='center' direction='row' justify='center'>
                    <Image
                      src='/image/fico_grade_loan_status.png'
                      size='large'
                      style={{width: '45vw'}}
                    />
                  </Box>
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Grade vs. FICO Range Low plot for charged off and fully paid loans indicates how FICO score affects if a borrower’s loan will be charged off or fully paid. This plot further investigates a possible trend among grades (A to G). As the grades decrease from A to G, the FICO scores also decreases. However, there is much overlap between the percentile ranges between charged off loans and fully paid off, despite of what grade the borrower belongs in. Hence FICO score by itself may not be as predictive on its own as we hypothesized for the model.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Home Ownership'>
                <Box direction='column' justify='center' align='center'>
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
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Home Ownership Counts vs. Number of Loans counter plot for charged off and fully paid loans indicates how home ownership affects if a borrower’s loan will be charged off or fully paid. Future engineering was conducted on original data to group home ownership into larger categories of mortgage, rent and own. This was done since rent”, “mortgage” and “own” have a significant number of observations while, “any”, “other” and “none” have only a few observations. Despite the type of home ownership, there are more fully paid loans than charged of loans. Hence home ownership may have some predictive value in the model.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Interest Rate'>
                <Box direction='column' justify='center' align='center'>
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
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '900px'}}>
                    Sub Grade vs. Interest Rate plot indicates how interest rate is differentiated in each subgrade. As the sub grade decreases from A1 to G5, the interest rate increases.  Hence borrowers with a higher ranking grade or subgrade will obtain a lower interest rate. Interest rate may have some predictive value in the model if certain sub grades were more prone to be charged off than fully paid. Note: An interest rate of 0.052 was observed in all subgrades. This interest rate was identified as an outlier and hence removed, even for ones worse than B1. The future engineered plot shows Sub Grade vs. Interest Rate without the outliers. <br/> Year vs. Interest Rate plot indicates how interest rate changes annually. This plot further investigates a possible trend among grades (A to G). This plot shows that overtime the interest rate increases, despite what grade the borrower is ranked as. In addition, this plot re-confirms that borrowers with a higher ranking grade will obtain a lower interest rate while borrowers with a lower ranking grade will obtain a higher interest rate. Hence year may have some predictive value in the model, especially when coupled with interest rate and grade.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Loan Purpose'>
                <Box direction='column' justify='center' align='center'>
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
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Loan Purpose vs. Number of Loans counter plot for charged off and fully paid loans indicates how loan purpose affects if a borrower’s loan will be charged off or fully paid. Future engineering was conducted on original data to group loan purpose into larger categories of debit consolidation, credit card, home improvement and other. The future engineering plot shows that there is significant amount of data under each category of loan purpose. In addition, most of the borrowers that participate in Lending Club have a loan purpose of debt consolidation. Despite the loan purpose, there are more fully paid loans than charged of loans. Hence loan purpose may have some predictive value in the model.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Payment Ratio'>
                <Box direction='column' justify='center' align='center'>
                  <Box align='center' direction='row' justify='center'>
                    <Image
                      src='/image/payment_ratio_charged_off.png'
                      size='large'
                      style={{width: '45vw'}}
                      />
                  </Box>
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Payment Ratio on Charged Off Loans plot indicates how much of the total charged off loan is payed to the investor. This plot further investigates a possible trend among grades (A to G). As the grade decreases from A to G, the payment ratio decreases. This plot gives insight to investors how much they can recover if a charge off were to occur. Although payment ratio isn’t a standalone predictor when it comes to determining if a loan will become charged off, it give insight on evaluating performance of the model in the future.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Revol Util'>
                <Box direction='column' justify='center' align='center'>
                  <Box align='center' direction='row' justify='center'>
                    <Carousel autoplay={false} infinite={false} style={{width: '45vw'}}>
                      <Image
                        src='/image/grade_revol_util_loan_status.png'
                        size='large'
                        style={{width: '45vw'}}
                      />
                      <Image
                        src='/image/grade_revol_util_loan_statusNoOutlier.png'
                        size='large'
                        style={{width: '45vw'}}
                      />
                    </Carousel>
                  </Box>
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Grade vs. Revolving Line Utilization Rate (Revol Util) plot for charged off and fully paid loans indicates how Revol Util (or the amount of credit the borrower is using relative to all available revolving credit) affects if a borrower’s loan will be charged off or fully paid. This plot further investigates a possible trend among grades (A to G). Although Grade A shows slightly less revol util than the rest of the grades, there is no significant difference between all the grades when it comes to revol util. However, there is much overlap between the percentile ranges between charged off loans and fully paid off, despite of what grade the borrower belongs in. Hence Revolving Line Utilization Rate by itself may not be as predictive on its own as we hypothesized for the model.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='States'>
                <Box direction='column' justify='center' align='center'>
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
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Address States vs. Number of Loans counter plot for charged off and fully paid loans indicates how locations affects if a borrower’s loan will be charged off or fully paid. Future engineering was conducted on original data to group home ownership into larger categories of other, CA, NY, TX, FL and IL. This was done since these larger categories had most significant number of observations while other states had only few observations. Despite the location of the address states, there are more fully paid loans than charged of loans. Hence address states may have some predictive value in the model.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Term'>
                <Box align='center' direction='column' justify='center'>
                  <Image
                    src='/image/grade_loan_by_term.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Grade vs. Number of Loans by Term counter plot for charged off and fully paid loans indicates how borrowers in different grades apply for either 36 month or 60 month loans. This plot shows that borrowers with higher grades (ie: A or B) apply for 36 month loans while borrowers with lower grades (ie: E or F) apply for 60 moth loans.  Although term isn’t a standalone predictor when it comes to determining if a loan will become charged off, it give insight on evaluating performance of the model in the future.
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
          style={{minHeight: '1000px'}}
          pad='large'
        >
          <Box align='center'>
            <Heading tag='h1' strong={true}>Models</Heading>
            <Heading tag='h3'>Our models.</Heading>
          </Box>
          <Box full='horizontal'>
            <Tabs>
              <Tab title='Proportion'>
                <Box align='center' justify='center' direction='column'>
                  <Box align='center' direction='row' justify='center'>
                    <Image
                      src='/image/predicted_actual_proportion_fully.png'
                      size='large'
                      style={{width: '45vw'}}
                      />
                  </Box>
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
                    Here we can see the proportion of Fully Paid loans that is actually present in our data set, compared to what each model predicts. We can see that the model predictions are influenced by the way that instances of Fully Paid and Charged Off classes are distributed in the training data. When trained on the original data, random forest and AdaBoost predict a higher number of Fully Paid loans than is actually there for all sub-grades (this explains the high recall noted earlier). When trained on the class re-balanced data, random forest and AdaBoost predict a lower number of Fully Paid loans than is actually there for all sub-grades. However, given the noisy nature of the data, such results are not unexpected.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='Accuracy'>
                <Box align='center' justify='center' direction='column'>
                  <Box align='center' direction='row' justify='center'>
                    <Image
                      src='/image/precision_fully.png'
                      size='large'
                      style={{width: '45vw'}}
                    />
                  </Box>
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '900px'}}>
                    The plot above is very important for evaluating our project. We believe that it is, in fact, the most important evaluation metric from an investor's perspective. The plot shows the precision of each model, by sub-grade, comparing the models to each other and to the trivial model. Here we can see that the random forest and AdaBoost models trained on the original data outperform the baseline model (i.e. picking loans at random from a given subgrade) only slightly. However, models that were trained on a re-balanced dataset have learned to separate Fully Paid and Charged Off loans better. They show significant improvement over the baseline/trivial model for all sub-grades. We can notice some marked outperformance for sub-grades E3 to F3.
                    <br/>
                    Our best model turns out to be AdaBoost_bal (AdaBoost trained on a re-balanced dataset). We believe that this model has good potential to help investors pick a higher percentage of winning loans, and to thereby enhance their portfolio return at Lending Club.
                    <br/>
                    As an illustrative example, consider sub-grade E3. Historically loans for this sub-grade had a charge off ratio of 40%. When run on the test set, our AdaBoost_bal model had a charge off ratio of about 26% for sub-grade E3. If such model performance were to hold up in the future it would provide a great benefit to an investor, given that loans in sub-grade E3 carry a 25% interest rate in 2018.
                  </Paragraph>
                </Box>
              </Tab>
              <Tab title='ROC'>
                <Box direction='column' align='center' justify='center'>
                  <Image
                    src='/image/roc.png'
                    size='large'
                    style={{width: '45vw'}}
                  />
<Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px'}}>
The ROC curve for our best model, AdaBoost_bal has the expected smooth shape. The fact that is not more 'bowed out' is another indicator of how challenging of a dataset we had. An AUC of 0.59 sets a benchmark for future modeling.
</Paragraph>
                </Box>
              </Tab>
              <Tab title='Feature Importance'>
                <Box direction='row' align='center' justify='center'>
                  <Image
                    src='/image/importance_15.png'
                    size='medium'
                  />
                  <Paragraph size='small' style={{borderLeft: '4px solid black', paddingLeft: '10px', maxWidth: '800px', marginLeft: '30px'}}>
                    The table left shows the top 15 feature importance for our AdaBoost_bal model as calculated via a data permutation algorithm implemented in sklearn. The five features found to be most important for predictive power were 1) monthly debt payments to monthly income (dti) 2) loan amount 3) annual income 4) credit history length 5) FICO score. Among the categorical variables the most important ones were term length and whether the borrower was a renter. It is interesting that credit history length turned out to be important. This is a feature that we derived from feature engineering, and our efforts appear to have paid off vis-a-vis better performance.
                    <br/>
                    We feel that it is a favorable development that our model found several features to have importance for making predictions, rather than just one or two. This indicates that the model may have discovered interesting interactions between features, which led to better predictions for our difficult dataset.
                  </Paragraph>
                </Box>
              </Tab>
            </Tabs>
          </Box>
        </Section>

        <Section
          direction='row'
          colorIndex='neutral-1'
          justify='center'
          align='center'
          wrap={true}
          style={{minHeight: '1000px'}}
          pad='large'
        >
          <Box align='start'>
            <Heading tag='h1' strong={true}>Final Result and thoughts</Heading>
            <Heading tag='h3'>What we learned from this project.</Heading>
            <Paragraph style={{maxWidth: '800px'}}>
              Our project goal was to employ the methods of data science in order to create a predictive tool that investors could use to select loans available through the Lending Club platform.  One of the most important factors that any fixed income investor is concerned with is the odds that a borrower will stop paying and renege on loan obligation.  The Lending Club site provides data about such occurrences throughout its history, along with extensive information for all loans and borrowers.  We collected this data, cleaned it and merged it into one file.   Through exploratory data analysis and feature engineering we selected a set of predictors appropriate for modeling.  We used three main principles in feature selection: 1) the features had to be publicly available to investors at the time the loan was made 2) the features had to have enough values to be meaningfully used in the model and 3) the features had to be potentially helpful for separating loans in the Fully Paid class from loans in the Charged Off class.
<br/>
During EDA we discovered that many predictors were weak – they did not separate the classes well.  Therefore, our hope was that interesting interactions would be discovered amongst the features during modeling, and that this would lead to good predictions.  We also had to contend with the issue of unbalanced data in the response classes (there were many more Fully Paid loans than Charged Off ones).  The solution that we came up with was to fit some of the models with training sets that had re-balanced classes (via sub-grade stratified under-sampling of the larger class).
<br/>
After completing the above steps, we used logistic regression, random forest and boosting classifiers to make predictions for loans in classes C, D, E and F.  Our best model turned out to be AdaBoost trained on the balanced data set.  Its performance on the test set was superior to the trivial model for each sub-grade.  (The trivial model would construct a portfolio of loans by picking them at random.)  If the performance of our best model on the test were to generalize to future predictions, then we contend that it would be of great benefit to investors in improving their loan portfolio performance.  We were careful in evaluating the results of our model to make sure that were not produced by some artifact during training.
<br/>
There are several avenues for future work to extend our project and to use the Lending Club data in general.  One interesting issue to consider carefully is whether or not Lending Club changed its grading procedures during its operations, and what impact this might have on predicting charge offs based on past data.  Another exciting area of research would be to delve into the declined loans data, which we did not examine, and to investigate how Lending Club selects loans for its platform.  This kind of project might have less direct application for investors, but it could provide interesting insights into the operations of Lending Club, including whether or not there are any potential instances of discrimination that occur.
            </Paragraph>
          </Box>
          <Box pad='medium'>
            <GrowIcon size='huge' colorIndex='ok' />
          </Box>
        </Section>

        <Section
          direction='row'
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
            <Box direction='row' align='end' justify='center'>
              <Box pad='medium'>
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
              <Box pad='medium'>
                <Heading tag='h3'>Reference</Heading>
                <Paragraph>
                  [1] Lending Club - How to use<br/>
                  https://www.lendingclub.com/investing/alternative-assets/how-it-works<br/>
                  <br/>
                  [2] Lending Club Statistics. LendingClub<br/>
                  www.lendingclub.com/info/download-data.action.<br/>
                  <br/>
                  [3] “Credit & Lending Discrimination and Borrowers' Rights.” Findlaw, Thomson Reuters,<br/>
                  https://civilrights.findlaw.com/discrimination/credit-lending-discrimination-and-borrowers-rights.html.<br/>
                  <br/>
                  [4] “Lenders Can’t Discriminate, but What about Investors?” FT Alphaville, The Financial Times Ltd, <br/>
                  https://ftalphaville.ft.com/2016/01/13/2150093/lenders-cant-discriminate-but-what-about-investors/.<br/>
                </Paragraph>
              </Box>
            </Box>
          </Box>
        </Section>
      </GrommetApp>
    );
  }
}

export default App;
