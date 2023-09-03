const InvestmentFormInput = (props) => {
  return (
    <p>
      <label htmlFor={props.inputId}>{props.inputText}</label>
      <input type={props.inputType} id={props.inputId} value={props.inputValue} onChange={props.onInputChange}/>
    </p>
  );
};

export default InvestmentFormInput;
