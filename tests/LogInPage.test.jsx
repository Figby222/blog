import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import LogInPage from "../src/components/LogInPage.jsx";

describe("LogInPage existence", () => {
    it("Exists", () => {
        expect(LogInPage).toBeDefined();
    })
    
    it("Is a function", () => {
        expect(LogInPage).toBeTypeOf("function");
    })
})

describe("Username field", () => {
    it("Exists", () => {
        render(<LogInPage logInUser={() => {}} />);
        
        expect(screen.queryByText(/Username/i)).toBeInTheDocument();
    })

    it("Is has an input", () => {
        render(<LogInPage logInUser={() => {}} />);

        expect(screen.queryByLabelText(/Username/i))
            .toBeInTheDocument();
    })
})

describe("Password field", () => {
    it("Exists", () => {
        render(<LogInPage logInUser={() => {}} />);

        expect(screen.queryByText(/Password/i)).toBeInTheDocument();
    })
})