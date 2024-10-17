import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import LogInPage from "../src/components/LogInPage.jsx";
import userEvent from "@testing-library/user-event";

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

    it("Is has an input", () => {
        render(<LogInPage logInUser={() => {}} />);

        expect(screen.queryByLabelText(/Password/i))
            .toBeInTheDocument();
    })
})

describe("Submit button", () => {
    it("Exists", () => {
        render(<LogInPage logInUser={() => {}} />);

        expect(screen.queryByRole("button"))
            .toBeInTheDocument();
    })

    it("Has submit text", () => {
        render(<LogInPage logInUser={() => {}} />);
        expect(screen.queryByRole("button").textContent)
            .toMatch(/Submit/i);
    })
})

describe("Submitting the form", () => {
    it("Calls logInUser on submit", async () => {
        const onSubmit = vi.fn(() => ({}));
        render(<LogInPage logInUser={onSubmit} />);

        const usernameInput = screen.queryByLabelText(/Username/i);
        const passwordInput = screen.queryByLabelText(/Password/i);
        const submitButton = screen.queryByRole("button", { name: /Submit/i });

        const user = userEvent.setup();

        await user.type(usernameInput, "testValidUsername");
        await user.type(passwordInput, "testValidPassword4444");

        await user.click(submitButton);

        expect(onSubmit).toHaveBeenCalled();

        

    })

    it("Doesn't call logInUser not on submit", async () => {
        const onSubmit = vi.fn(() => ({}));

        render(<LogInPage logInUser={onSubmit} />);

        const usernameInput = screen.queryByLabelText(/Username/i);
        const passwordInput = screen.queryByLabelText(/Password/i);

        const user = userEvent.setup();

        await user.type(usernameInput, "testValidUsername");
        await user.type(passwordInput, "testValidPassword4444");

        expect(onSubmit)
            .not.toHaveBeenCalled();
    })

    it("Calls logInUser with credentials", async () => {
        const onSubmit = vi.fn(() => ({}));

        render(<LogInPage logInUser={onSubmit} />);

        const usernameInput = screen.queryByLabelText(/Username/i);
        const passwordInput = screen.queryByLabelText(/Password/i);
        const submitButton = screen.queryByRole("button", { name: /Submit/i });

        const user = userEvent.setup();

        await user.type(usernameInput, "testValidUsername");
        await user.type(passwordInput, "testValidPassword4444");

        await user.click(submitButton);

        expect(onSubmit).toHaveBeenCalledWith("testValidUsername", "testValidPassword4444");
    })

    it("Calls logInUser with different credentials", async () => {
        const onSubmit = vi.fn(() => ({}));
        render(<LogInPage logInUser={onSubmit} />);

        const usernameInput = screen.queryByLabelText(/Username/i);
        const passwordInput = screen.queryByLabelText(/Password/i);
        const submitButton = screen.queryByRole("button", { name: /Submit/i });

        const user = userEvent.setup();

        await user.type(usernameInput, "testDifferentValidUsername");
        await user.type(passwordInput, "testDifferentValidPassword4444");

        await user.click(submitButton);

        expect(onSubmit)
            .toHaveBeenCalledWith(
                "testDifferentValidUsername", 
                "testDifferentValidPassword4444");
    })
})