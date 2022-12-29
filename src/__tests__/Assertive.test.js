import React from "react";
import {fireEvent, render, screen, act, waitFor} from "@testing-library/react";
import App from "../App";
import Main from "../components/Main";
import Assertive from "../components/Assertive";

describe("Assertive Functions Examples", () => {

  it("renders App component", async () => {
    render(<App />);
    //basic
    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    // screen.debug();
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();

    // toBeDisabled 1
    expect(screen.getByRole('button', {name: 'Click Me!'})).toBeDisabled();

    // toBeEnabled 2
    expect(screen.getByRole('button', {name: 'Click Me!'})).not.toBeEnabled();

    // toBeEmpty 3
    expect(screen.getByLabelText(/search/i)).toBeEmptyDOMElement(); //toBeEmpty() is deprecated

    // toBeInTheDocument 5
    expect(await screen.findByRole('searched_object')).toBeInTheDocument();

    // toBeInvalid 6
    expect(screen.getByTestId('aria-invalid-false')).not.toBeInvalid();

    // toBeRequired 7
    expect(screen.getByLabelText(/search/i)).not.toBeRequired();

    // toBeValid 8
    expect(screen.getByTestId('aria-invalid-false')).toBeValid();

    // toContainElement 10
    expect(screen.getAllByRole('textbox')[1]).not.toContainElement(null); //shouldn't have null and undefined

    // toContainHTML 11
    expect(screen.getAllByRole('textbox')[1]).not.toContainHTML('div');

    // toHaveAttribute 12
    expect(screen.getByLabelText(/search/i)).toHaveAttribute("id");

    // toHaveClass 13
    expect(screen.getByAltText(/search image 333/i)).toHaveClass("image333");
    expect(screen.getAllByAltText(/search image/i)[1]).toHaveClass("image333");

    // toHaveFocus 14
    const btn = screen.getAllByRole('button')[0];
    btn.focus();
    await (() => expect(btn).toHaveFocus());

    // toHaveFormValues 15
    expect(screen.getByRole('form')).not.toHaveFormValues({ username: 'admin', password: '12345678' });

    // toHaveStyle 16
    expect(screen.queryByRole('checkbox')).not.toHaveStyle({display: 'none'});

    // toHaveTextContent 17
    expect(await screen.findByRole('searched_object')).toHaveTextContent(/[A-Za-z.]/); //value must be a Node

    // toHaveValue 18
    expect(screen.getAllByPlaceholderText(/.../)[0]).not.toHaveValue(/1-9/);

    // toHaveDisplayValue 19
    expect(screen.getByRole('input')).toHaveDisplayValue('developer');

    // toBeChecked 20
    expect(screen.getByRole('checkbox', { name:'rememberMe' })).toBeChecked();

    // toBePartiallyChecked 21
    expect(screen.getByRole('checkbox', { name:'rememberMe' })).not.toBePartiallyChecked();
    //<input type="checkbox" aria-checked="mixed" data-testid="aria-checkbox-mixed" />
    //https://w3c.github.io/aria-practices/examples/checkbox/checkbox-mixed.html

    // toHaveDescription 22
    expect(screen.getByRole('button', { name: 'Click Me!' })).toHaveAccessibleDescription(''); //toHaveDescription() is deprecated
  });

  it("renders visible button",  () => {
    // toBeVisible 9
    render(<Main/>);
    expect(screen.getByRole('button')).toBeVisible();
  });

  it("renders input in the DOMElement",  () => {
    // toBeEmptyDOMElement 4
    render(<Assertive/>);
    waitFor(() => {
      expect(screen.getByRole('form')).toBeEmptyDOMElement();
    });

  });

});
