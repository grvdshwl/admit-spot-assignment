import React from "react";
import { Container, Typography } from "@mui/material";

interface TotalDisplayProps {
  label: string;
  amount: number;
  color: string;
}

const TotalDisplay: React.FC<TotalDisplayProps> = ({
  label,
  amount,
  color,
}) => (
  <Container style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
    <Typography variant="body1" gutterBottom fontWeight="500">
      {label} :
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color }} fontWeight="600">
      ${amount}
    </Typography>
  </Container>
);

interface ExpenseTrackerUIProps {
  totalIncome: number;
  totalExpenses: number;
}

const ExpenseTrackerUI: React.FC<ExpenseTrackerUIProps> = ({
  totalIncome,
  totalExpenses,
}) => {
  return (
    <Container style={{ marginBottom: "20px" }}>
      <Typography
        variant="h5"
        gutterBottom
        style={{ marginTop: "40px" }}
        fontFamily="monospace"
      >
        Recent Expenses
      </Typography>

      <TotalDisplay
        label="Total Expenses"
        amount={Math.abs(totalExpenses)}
        color="red"
      />

      <TotalDisplay label="Total Income" amount={totalIncome} color="green" />
    </Container>
  );
};

export default ExpenseTrackerUI;
