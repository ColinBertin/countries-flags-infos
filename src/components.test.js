import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { Card } from "./components/Countries/Card/Card";
import { Country } from "./components/Country/Country";
import { BorderCountry } from "./components/Country/BorderCountry/BorderCountry";
import { SearchBar } from "./components/Countries/Filter/SearchBar/SearchBar";
import { SelectRegion } from "./components/Countries/Filter/SelectRegion/SelectRegion";
import { App } from "./App";



test("renders App", () => {
  render(< App />);
  const app = screen.getByTestId("app");
  expect(app).toBeDefined();
});

test("renders Card", () => {
  render(< Card />, {wrapper: Router});
  const card = screen.getByTestId("card");
  expect(card).toBeDefined();
});

test("renders Country", () => {
  render(< Country />, {wrapper: Router});
  const country = screen.getByTestId("country");
  expect(country).toBeDefined();
});

test("renders BorderCountry", () => {
  render(< BorderCountry />, {wrapper: Router});
  const borderCountry = screen.getByTestId("borderCountry");
  expect(borderCountry).toBeDefined();
});

test("renders SelectRegion", () => {
  render(< SelectRegion />);
  const selectRegion = screen.getByTestId("selectRegion");
  expect(selectRegion).toBeDefined();
});

test("renders SearchBar", () => {
  render(< SearchBar />);
  const searchBar = screen.getByTestId("searchBar");
  expect(searchBar).toBeDefined();
});
