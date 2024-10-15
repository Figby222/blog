import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import SignUpPage from "../src/components/SignUpPage.jsx";
import userEvent from "@testing-library/user-event";

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

    it("Is has an input", () => {
        render(<SignUpPage createAnAccount={() => {}} />);

        expect(screen.queryByLabelText(/Username/i)).toBeInTheDocument();
    })
})

describe("Password", () => {
    it("Exists", () => {
        render(<SignUpPage createAnAccount={() => {}} />);
        expect(screen.queryByText("Password")).toBeInTheDocument();
    })

    it("Is has an input", () => {
        render(<SignUpPage createAnAccount={() => {}} />);
        
        expect(screen.queryByLabelText("Password")).toBeInTheDocument();
    })
})

describe("Confirm Password", () => {
    it("Exists", () => {
        render(<SignUpPage createAnAccount={() => {}} />);
        expect(screen.queryByText(/Confirm Password/i)).toBeInTheDocument();
    })

    it("Is has an input", () => {
        render(<SignUpPage createAnAccount={() => {}} />);

        expect(screen.queryByLabelText(/Confirm Password/i)).toBeInTheDocument();
    })
})

describe("Submit Button", () => {
    it("Exists", () => {
        render(<SignUpPage createAnAccount={() => {}} />);
        expect(screen.queryByRole("button"))
            .toBeInTheDocument();
    })

    it("Has Submit text", () => {
        render(<SignUpPage createAnAccount={() => {}} />);
        expect(screen.queryByRole("button").textContent).toMatch(/Submit/i);
    })
})

describe("Submitting the form with valid credentials", () => {
    it("Calls createAnAccount", async () => {
        const onSubmit = vi.fn(() => {})
        render(<SignUpPage createAnAccount={onSubmit} />);

        const usernameInput = screen.queryByLabelText(/Username/i);
        const passwordInput = screen.queryByLabelText("Password");
        const confirmPasswordInput = screen.queryByLabelText(/Confirm Password/i);
        const submitButton = screen.queryByRole("button", { name: /Submit/i });

        const user = userEvent.setup();

        await user.type(usernameInput, "testUsername");
        await user.type(passwordInput, "testPassword4444");
        await user.type(confirmPasswordInput, "testPassword4444");

        await user.click(submitButton);

        expect(onSubmit)
            .toHaveBeenCalled();
    })

    it("Doesn't call createAnAccount when not submitted", async () => {
        const onSubmit = vi.fn(() => {});
        render(<SignUpPage createAnAccount={onSubmit} />);

        const usernameInput = screen.queryByLabelText(/Username/i);
        const passwordInput = screen.queryByLabelText("Password");
        const confirmPasswordInput = screen.queryByLabelText(/Confirm Password/i);

        const user = userEvent.setup();

        await user.type(usernameInput, "testUsername");
        await user.type(passwordInput, "testPassword4444");
        await user.type(confirmPasswordInput, "testPassword4444");

        expect(onSubmit).not.toHaveBeenCalled();
    })
})