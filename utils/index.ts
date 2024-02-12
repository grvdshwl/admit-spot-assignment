import { TransactionProps } from "../types/index";

export const calculateTotals = (transactions: TransactionProps[]) => {
    let income = 0;
    let expense = 0;

    transactions.forEach((transaction) => {
      if (transaction.category === "credit") {
        income += Number(transaction.amount);
      } else if (transaction.category === "debit") {
        expense += Number(transaction.amount);
      }
    });

    return { income, expense };
  };