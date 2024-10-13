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