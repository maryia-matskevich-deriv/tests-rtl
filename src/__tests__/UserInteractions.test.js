import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("User Interactions Examples", () => {

    test("App component + fireEvent", async () => {
        render(<App />);
        await screen.findByText(/Logged in as/i);
        expect(screen.queryByText(/Searches for React/)).toBeNull();
        fireEvent.change(screen.getAllByRole("textbox")[0], {
            target: { value: "React" },
        });
        //or
        // userEvent.type(screen.getAllByRole("textbox", /search/i)[0])
        expect(screen.getByText(/Searches for React/)).toBeInTheDocument();
    });

    it("checkbox click", () => {
        const handleChange = jest.fn();
        const { container } = render(
            <input type="checkbox" onChange={handleChange} />
        );
        const checkbox = container.firstChild; // or .getByRole()
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        //or
        // userEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked();
    });

    it("input focus", () => {
        const { getByTestId } = render(
            <input type="text" data-testid="simple-input" />
        );
        const input = getByTestId("simple-input");
        expect(input).not.toHaveFocus();
        input.focus();
        expect(input).toHaveFocus();
    });

    it("double click", () => {
        const onChange = jest.fn();
        const { container } = render(<input type="checkbox" onChange={onChange} />);
        const checkbox = container.firstChild;
        expect(checkbox).not.toBeChecked();
        userEvent.dblClick(checkbox);
        expect(onChange).toHaveBeenCalledTimes(2);
    });

    it("click to button tab (focus)", () => {
        const { getAllByTestId } = render(
            <div>
                <input data-testid="element" type="checkbox" />
                <input data-testid="element" type="radio" />
                <input data-testid="element" type="number" />
            </div>
        );
        const [checkbox, radio, number] = getAllByTestId("element");
        userEvent.tab();
        expect(checkbox).toHaveFocus();
        userEvent.tab();
        expect(radio).toHaveFocus();
        userEvent.tab();
        expect(number).toHaveFocus();
    });

    it("user choose the select option", () => {
        const { selectOptions, getByRole, getByText } = render(
            <select>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
            </select>
        );

        userEvent.selectOptions(getByRole('combobox'), "1"); //combobox is a role, 1 is what user chooses
        expect(getByText("A").selected).toBeTruthy();

        userEvent.selectOptions(getByRole('combobox'), "2");
        expect(getByText("B").selected).toBeTruthy();
        expect(getByText("A").selected).toBeFalsy();
    });
});
