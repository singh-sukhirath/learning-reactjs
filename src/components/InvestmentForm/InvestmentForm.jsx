import { useState } from "react";
import InvestmentFormInput from "./InvestmentFormInput";
import styles from './InvestmentForm.module.css';

const InvestmentForm = (props) => {
  
  const [userInput, setUserInput] = useState({
    currentSavings : '',
    yearlyContribution : '',
    expectedReturn : '',
    investmentDuration : ''
  });
  
  const inputChangeHandler = (event) => {

    if(event.target.id === 'current-savings')
    {
      setUserInput((prevValue) => {
        return {
          ...prevValue,
          currentSavings: +event.target.value
        }
      })
    }
    else if(event.target.id === 'yearly-contribution')
    {
      setUserInput((prevValue) => {
        return {
          ...prevValue,
          yearlyContribution: +event.target.value
        }
      })
    }
    else if(event.target.id === 'expected-return')
    {
      setUserInput((prevValue) => {
        return {
          ...prevValue,
          expectedReturn: +event.target.value
        }
      })
    }
    else if(event.target.id === 'duration')
    {
      setUserInput((prevValue) => {
        return {
          ...prevValue,
          investmentDuration: +event.target.value
        }
      })
    }
  }

  const formResetHandler = () => {
    setUserInput({
      currentSavings : '',
      yearlyContribution : '',
      expectedReturn : '',
      investmentDuration : ''
    });

    props.onFormSubmit('');
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(userInput);
  }

  return (
    <form className={`${styles.form}`} onSubmit={formSubmitHandler}>
      <div className={styles['input-group']}>
        <InvestmentFormInput
          inputId="current-savings"
          inputType="number"
          inputText="Current Savings ($)"
          inputValue= {userInput.currentSavings}
          onInputChange={inputChangeHandler}
        />
        <InvestmentFormInput
          inputId="yearly-contribution"
          inputType="number"
          inputText="Yearly Savings ($)"
          inputValue= {userInput.yearlyContribution}
          onInputChange={inputChangeHandler}
        />
      </div>
      <div className={styles['input-group']}>
        <InvestmentFormInput
          inputId="expected-return"
          inputType="number"
          inputText="Expected Interest (%, per year)"
          inputValue= {userInput.expectedReturn}
          onInputChange={inputChangeHandler}
        />
        <InvestmentFormInput
          inputId="duration"
          inputType="number"
          inputText="Investment Duration (years)"
          inputValue= {userInput.investmentDuration}
          onInputChange={inputChangeHandler}
        />
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={formResetHandler}>
          Reset
        </button>
        <button type="submit" className={`${styles.button}`}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
