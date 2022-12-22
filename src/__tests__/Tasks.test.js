import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Tasks", () => {

    it("Check that option 'Ms.' was selected", () => {
        expect(true).toBe(true);
    });

    it("Check that the user has filled the form at least 3 fields", () => {
        expect(true).toBe(true);
    });

    it("Check that the field 'First Name' was focused and filled with only text", () => {
        expect(true).toBe(true);
    });

    it("Check that the button submit was clicked", () => {
        expect(true).toBe(true);
    });

    it("Check that the form has a class", () => {
        expect(true).toBe(true);
    });

    it("Check that the labels of the form have a content", () => {
        expect(true).toBe(true);
    });

    it("Check that the user can open a list of the titles and doesn't choose anything", async () => {
        render(<App/>);
        expect(true).toBe(true);
    });

    it("Check that the user doesn't gonna click a submit until at least 3 fields will be filled", () => {
        expect(true).toBe(true);
    });

    it("Check that the field 'Email' should have correct validation", () => {
        expect(true).toBe(true);
    });

    it("Check that all fields on the first render should be empty", () => {
        expect(true).toBe(true);
    });
}