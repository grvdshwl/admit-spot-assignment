"use client";
import React from "react";
import {
  ExpenseTrackerContainer,
  ExpenseTrackerTitle,
} from "./ExpenseTracker.styles";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import ExpenseTrackerTransactions from "./ExpenseTrackerTransactions";

const ExpenseTracker: React.FC = () => {
  return (
    <ExpenseTrackerContainer>
      <ExpenseTrackerTitle
        variant="h4"
        fontWeight="500"
        gutterBottom
        style={{ marginTop: "40px" }}
        fontFamily="monospace"
      >
        Expense Tracker
      </ExpenseTrackerTitle>
      <ExpenseTrackerForm />
      <ExpenseTrackerTransactions />
    </ExpenseTrackerContainer>
  );
};

export default ExpenseTracker;
