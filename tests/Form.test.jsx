import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import Form from "../src/components/Form.jsx";

describe("Form existence", () => {
    it("Exists", () =>  {
        expect(Form).toBeDefined();
    })
    
    it("Is a function", () => {
        expect(Form).toBeTypeOf("function");
    })
})

describe("Submit button", () => {
    it("Exists", () => {
        render(<Form submitListener={() => {}} submitButtonText={""}></Form>)

        const submitButton = screen.queryAllByRole("button");


        expect(submitButton.length).toBeGreaterThanOrEqual(1);
    })

    it("Renders given text", () => {
        render(<Form submitListener={() => {}} submitButtonText={"Submit"}></Form>)
        
        const submitButton = screen.queryByRole(
            "button",
            { name: /submit/i }
        );

        expect(submitButton).toBeInTheDocument();
    })
})