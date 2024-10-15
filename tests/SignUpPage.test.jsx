import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import SignUpPage from "../src/components/SignUpPage.jsx";

describe("Sign-Up page existence", () => {
    it("Exists", () => {
        expect(SignUpPage).toBeDefined();;;;
    })
    it("Is a function", () => {
        expect(SignUpPage).toBeTypeOf("function");
    })
})
describe("Username", () => {
    it("Exists", () => {
        render(<SignUpPage createAnAccount={() => {}} />);
        expect(screen.queryByText(/Username/i)).toBeInTheDocument();
    })
})