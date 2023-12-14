import css from '../css/button.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
        {options.map(option => (
          <button className={css.button} key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };
export {FeedbackOptions};  