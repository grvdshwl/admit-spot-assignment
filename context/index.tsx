"use client";
import React, { ReactNode, createContext, useState } from "react";
import { TransactionProps } from "../types/index";
import { calculateTotals } from "../utils";

interface TransactionContextType {
  transactions: TransactionProps[];
  addTransaction: (transaction: TransactionProps) => void;
  deleteTransaction: (id: string) => void;
  totalIncome: number;
  totalExpense: number;
}

const initialTransactionContext: TransactionContextType = {
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
  totalIncome: 0,
  totalExpense: 0,
};

export const TransactionContext = createContext<TransactionContextType>(
  initialTransactionContext
);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const addTransaction = (transaction: TransactionProps) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const { income, expense } = calculateTotals(transactions);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        totalIncome: income,
        totalExpense: expense,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
