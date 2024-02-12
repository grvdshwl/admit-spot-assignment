import { render } from "@testing-library/react";
import ExpenseTrackerUI from "./ExpenseTrackerUI";

describe("ExpenseTrackerUI", () => {
  test("renders the component with correct props", () => {
    const totalIncome = 500;
    const totalExpenses = 300;

    const { getByText } = render(
      <ExpenseTrackerUI
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
      />
    );

    const totalExpensesText = getByText("Total Expenses :");
    const totalIncomeText = getByText("Total Income :");

    expect(totalExpensesText).toBeTruthy();
    expect(totalIncomeText).toBeTruthy();
  });
});
