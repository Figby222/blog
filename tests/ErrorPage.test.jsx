import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorPage from "../src/components/ErrorPage.jsx";

describe("Error Page", () => {
    it("Exists", () => {
        expect(ErrorPage).toBeDefined();
    });
    
    it("Is a function", () => {
        expect(ErrorPage).toBeTypeOf("function");
    });

    it("Renders a heading", () => {
        render(<ErrorPage status={404} message={"AAAA"} />);

        const headings = screen.queryAllByRole("heading");

        expect(headings.length).toBeGreaterThanOrEqual(1);
    })

    
})