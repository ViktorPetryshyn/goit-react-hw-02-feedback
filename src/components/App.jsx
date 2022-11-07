import React, { Component } from "react";
import { FeedbackStat } from 'components/Statistics/Statistics'
import { FeedbackCreateControl } from 'components/FeedbackCreateControl/FeedbackCreateControl';
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { Box } from 'components/utils/box.styled';

export class App extends Component  {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
   
  addFeedback = (name) => {
    this.setState(prevState => ({[name]: prevState[name] +1}))
  }
  

  countTotalFeedback = () => {
    // const feedvalues = Object.values(this.state);
    // return feedvalues.reduce((acc, num) => acc + num, 0) ////////// Why it doesn't work?????
    const { good, neutral, bad } = this.state
    return good+neutral+bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good/this.countTotalFeedback())*100);
  }



  render() {
    const { good, neutral, bad } = this.state
    const choiceNames = Object.keys(this.state)
    const totalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    
        return (
          <Box>
          <Section title={"Please leave feedback"}>
            <FeedbackCreateControl
              onFeedback={this.addFeedback}
              choiceNames={choiceNames} />
            </Section>
            
          <Section title={"Statistics"}>
          {totalFeedback> 0 ?  <FeedbackStat 
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              percentage={PositiveFeedbackPercentage}
              /> : <Notification message="There is no feedback"/>}
          </Section>
          </Box>
        );
    }
}
