import React from "react";
import { render, screen } from "@testing-library/react";
import ExpenseTrackerTransactions from "./index";
import { TransactionContext } from "../../../context";
import { TransactionProps } from "../../../types/index";

describe("ExpenseTrackerTransactions", () => {
  test("renders transactions table with correct data", () => {
    const transactions = [
      {
        id: "1",
        description: "Groceries",
        amount: "50",
        category: "debit",
        date: new Date("2024-02-10"),
      },
      {
        id: "2",
        description: "Salary",
        amount: "2000",
        category: "credit",
        date: new Date("2024-02-09"),
      },
    ];

    const totalIncome = 2000;
    const totalExpense = 50;

    const mockDeleteTransaction = jest.fn();
    const mockAddTransaction = jest.fn();

    render(
      <TransactionContext.Provider
        value={{
          transactions,
          totalIncome,
          totalExpense,
          deleteTransaction: mockDeleteTransaction,
          addTransaction: mockAddTransaction,
        }}
      >
        <ExpenseTrackerTransactions />
      </TransactionContext.Provider>
    );

    expect(screen.getByText("Expense Date")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Remove Expense")).toBeInTheDocument();

    expect(screen.getByText("Groceries")).toBeInTheDocument();
    expect(screen.getByText("debit")).toBeInTheDocument();

    const deleteButtons = screen.getAllByText("Delete");
    expect(deleteButtons.length).toBe(2);
  });

  test("renders no expenses message when there are no transactions", () => {
    const transactions: TransactionProps[] = [];
    const totalIncome = 0;
    const totalExpense = 0;

    const mockDeleteTransaction = jest.fn();
    const mockAddTransaction = jest.fn();
    render(
      <TransactionContext.Provider
        value={{
          transactions,
          totalIncome,
          totalExpense,
          deleteTransaction: mockDeleteTransaction,
          addTransaction: mockAddTransaction,
        }}
      >
        <ExpenseTrackerTransactions />
      </TransactionContext.Provider>
    );

    expect(
      screen.getByText("No expenses found, please add some!")
    ).toBeInTheDocument();
  });
});
