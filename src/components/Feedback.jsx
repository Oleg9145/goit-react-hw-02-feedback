import React, { Component } from 'react';
import{Section} from './Title';
import { Statistics } from './Statistics';
import {FeedbackOptions} from './FeedbackOptions';
class Feedback extends Component  {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  
    handleFeedback = (type) => {
        this.setState(prevState => ({
          ...prevState,
          [type]: prevState[type] + 1
        }));
      };
    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };
  toggleContent = () => {
    this.setState(prevState => ({
      isContentVisible: !prevState.isContentVisible
    }));
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}


export { Feedback}