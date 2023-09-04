import { useState } from "react";
import InvestmentForm from "../InvestmentForm/InvestmentForm";
import InvestmentGrid from "../InvestmentGrid/InvestmentGrid";

const Investment = () => {
  const [calculateData, setCalculateData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = []; 

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    let currentSavings = +userInput["currentSavings"]; 
    let yearlySavings = +userInput["currentSavings"];
    let totalInterest = 0;

    const yearlyContribution = +userInput["yearlyContribution"]; 
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["investmentDuration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlySavings += yearlyContribution;
      totalInterest += yearlyInterest;

      yearlyData.push({
        key: i,
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        savingsEndOfYear: formatter.format(currentSavings),
        totalInterest: formatter.format(totalInterest),
        investedCapital: formatter.format(yearlySavings),
      });
    } 

    if (yearlyData.length > 0) {
      setCalculateData(yearlyData);
    } else {
      setCalculateData([]);
    }
  };

  return (
    <>
      <InvestmentForm onFormSubmit={calculateHandler} />
      <InvestmentGrid investmentData={calculateData} />
    </>
  );
};

export default Investment;
