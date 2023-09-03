import InvestmentGridData from "./InvestmentGridData";
import styles from './InvestmentGrid.module.css'

const InvestmentGrid = ({ investmentData }) => {
  return (
    <>
      {investmentData.length === 0 && (
        <p className={`${styles['no-data']} ${styles['result']}`}>No Records Available!!</p>
      )}
      {investmentData.length > 0 && (
        <table className={styles.result}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {investmentData.map((data) => {
              return <InvestmentGridData key={data.key} rowData={data} />;
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default InvestmentGrid;
