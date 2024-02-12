import React, { useContext } from "react";
import { TransactionProps } from "../../../types/index";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Container,
} from "@mui/material";
import { TransactionContext } from "../../../context";
import { ExpenseTrackerIllustration } from "./ExpenseTrackerTransactions.styles";
import errorIllustration from "../../../assets/empty.svg";
import ExpenseTrackerUI from "../ExpenseTrackerUI/ExpenseTrackerUI";

interface ExpenseTrackerTransactionProps {
  transaction: TransactionProps;
}

interface ExpenseTrackerTransactionProps {
  transaction: TransactionProps;
}

const ExpenseTrackerTransaction: React.FC<ExpenseTrackerTransactionProps> = ({
  transaction,
}) => {
  const { deleteTransaction } = useContext(TransactionContext);

  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  const categoryTextColor = transaction.category === "debit" ? "red" : "green";

  return (
    <TableRow
      key={transaction.id}
      style={{ fontSize: "16px", textTransform: "capitalize" }}
    >
      <TableCell>{transaction.date.toLocaleDateString()}</TableCell>
      <TableCell>{transaction.description}</TableCell>
      <TableCell style={{ color: categoryTextColor }}>
        ${transaction.amount}
      </TableCell>
      <TableCell style={{ color: categoryTextColor }}>
        {transaction.category}
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          style={{ background: "#0e185f" }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
const ExpenseTrackerTransactions: React.FC = () => {
  const { transactions, totalIncome, totalExpense } =
    useContext(TransactionContext);

  if (transactions.length === 0) {
    return (
      <Container style={{ textAlign: "center", marginTop: "50px" }}>
        <ExpenseTrackerIllustration
          src={errorIllustration}
          alt="no expenses image"
        />
        <Typography variant="h5" gutterBottom style={{ marginTop: "40px" }}>
          No expenses found, please add some!
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <ExpenseTrackerUI
        totalExpenses={totalExpense}
        totalIncome={totalIncome}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: "600",
                  background: "#0e185f",
                  color: "white",
                  padding: "8px",
                  margin: "0",
                }}
              >
                Expense Date
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "600",
                  background: "#0e185f",
                  color: "white",
                  padding: "8px",
                  margin: "0",
                }}
              >
                Description
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "600",
                  background: "#0e185f",
                  color: "white",
                  padding: "8px",
                  margin: "0",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "600",
                  background: "#0e185f",
                  color: "white",
                  padding: "8px",
                  margin: "0",
                }}
              >
                Category
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "600",
                  background: "#0e185f",
                  color: "white",
                  padding: "8px",
                  margin: "0",
                }}
              >
                Remove Expense
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <ExpenseTrackerTransaction
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ExpenseTrackerTransactions;
