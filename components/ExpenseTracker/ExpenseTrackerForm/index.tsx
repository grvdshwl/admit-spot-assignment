import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 function
import {
  ExpenseTrackerCategorySelect,
  ExpenseTrackerFormButton,
  ExpenseTrackerFormContainer,
  ExpenseTrackerFormMain,
  ExpenseTrackerTextField,
} from "./ExpenseTrackerForm.styles";
import { TransactionContext } from "../../../context";
import { TransactionProps } from "../../../types/index";

const ExpenseTrackerForm: React.FC = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");
  const [amountError, setAmountError] = useState<string>("");
  const [categoryError, setCategoryError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAmountError("");
    setDescriptionError("");
    setCategoryError("");

    if (!description) {
      setDescriptionError("Description is required");
      return;
    }

    if (description.length < 3) {
      setDescriptionError("Description must be at least 3 characters");
      return;
    }

    if (!amount) {
      setAmountError("Amount is required");
      return;
    }
    if (isNaN(Number(amount))) {
      setAmountError("Amount must be a number");
      return;
    }

    if (!category) {
      setCategoryError("category is required");
      return;
    }
    const id = uuidv4();
    const newTransaction: TransactionProps = {
      id,
      description,
      amount,
      category,
      date: new Date(),
    };
    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <ExpenseTrackerFormContainer elevation={3}>
      <ExpenseTrackerFormMain onSubmit={handleSubmit}>
        <ExpenseTrackerTextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={!!descriptionError}
          helperText={descriptionError}
        />
        <ExpenseTrackerTextField
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          error={!!amountError}
          helperText={amountError}
        />
        <ExpenseTrackerCategorySelect
          category={category}
          setCategory={setCategory}
          error={categoryError}
        />
        <ExpenseTrackerFormButton
          type="submit"
          variant="contained"
          style={{ backgroundColor: "#0e185f" }}
        >
          Add Transaction
        </ExpenseTrackerFormButton>
      </ExpenseTrackerFormMain>
    </ExpenseTrackerFormContainer>
  );
};

export default ExpenseTrackerForm;
