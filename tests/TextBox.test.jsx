import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import TextBox from "../src/components/TextBox.jsx";

describe("TextBox existence", () => {
    it("Exists", () => {
        expect(TextBox).toBeDefined();
    })

    it("Is a function", () => {
        expect(TextBox).toBeTypeOf("function");
    })
})

describe("TextBox label", () => {
    it("Exists", () => {
        render(<TextBox label={"Test Label"} placeholder={""} value={""} onChange={() => {}} />)

        expect(screen.queryByText(/Test Label/i)).toBeInTheDocument();
    })

    it("Renders a different value", () => {
        render(<TextBox label={"A Different Label"} placeholder={""} value={""} onChange={() => {}} />)

        expect(screen.queryByText(/Test Label/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/A Different Label/i)).toBeInTheDocument();
    })
})

describe("TextBox textarea", () => {
    it("Exists", () => {
        render(<TextBox label={"Test Label"} placeholder={""} value={""} onChange={() => {}} />);

        expect(screen.queryByRole("textbox")).toBeInTheDocument();
    })

    it("Has placeholder value", () => {
        render(<TextBox label={""} placeholder={"Test Placeholder"} value={""} onChange={() => {}} />)

        expect(screen.queryByRole("textbox").placeholder)
            .toMatch(/Test Placeholder/i);
    })

    it("Has a different placeholder value", () => {
        render(<TextBox label={""} placeholder={"A different placeholder"} value={""} onChange={() => {}} /> );

        const textbox = screen.queryByRole("textbox");

        expect(textbox.placeholder)
            .not.toMatch(/Test Placeholder/i);

        expect(textbox.placeholder)
            .toMatch(/A different placeholder/i);
    })

    it("Has the provided value", () => {
        render(<TextBox label={""} placeholder={""} value={"Test Value"} onChange={() => {}} />);

        expect(screen.queryByRole("textbox").value)
            .toMatch(/Test Value/i);
    })
})