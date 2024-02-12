"use client";
import React from "react";
import ExpenseTracker from "../../components/ExpenseTracker";
import Navigation from "../../components/Navigation";
import { TrackerContainer, TrackerNavContainer } from "./Tracker.styles";

const Tracker = () => {
  return (
    <TrackerContainer>
      <TrackerNavContainer>
        <Navigation />
      </TrackerNavContainer>
      <ExpenseTracker />
    </TrackerContainer>
  );
};

export default Tracker;
