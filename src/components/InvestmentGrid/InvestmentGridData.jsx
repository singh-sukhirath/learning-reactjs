const InvestmentGridData = (props) => {
  return (
    <tr>
      <td>{props.rowData.year}</td>
      <td>{props.rowData.savingsEndOfYear}</td>
      <td>{props.rowData.yearlyInterest}</td>
      <td>{props.rowData.totalInterest}</td>
      <td>{props.rowData.investedCapital}</td>
    </tr>
  );
};

export default InvestmentGridData;
