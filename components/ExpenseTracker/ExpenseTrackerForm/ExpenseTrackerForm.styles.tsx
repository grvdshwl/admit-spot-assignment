import { Button, FormHelperText, Paper, TextField } from "@mui/material";
import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface ExpenseTrackerCategorySelectProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
}
export const ExpenseTrackerFormContainer = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
`;

export const ExpenseTrackerFormMain = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ExpenseTrackerTextField = styled(TextField)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ExpenseTrackerFormButton = styled(Button)``;

export const ExpenseTrackerCategorySelect: React.FC<
  ExpenseTrackerCategorySelectProps
> = ({ category, setCategory, error }) => (
  <FormControl variant="outlined">
    <InputLabel id="category-label">Category</InputLabel>
    <Select
      labelId="category-label"
      id="category"
      value={category}
      onChange={(e) => setCategory(e.target.value as string)}
      label="Category"
      error={!!error}
    >
      <MenuItem value="">Select a category</MenuItem>
      <MenuItem value="credit">Credit</MenuItem>
      <MenuItem value="debit">Debit</MenuItem>
    </Select>
    {error && <FormHelperText error>{error}</FormHelperText>}
  </FormControl>
);
