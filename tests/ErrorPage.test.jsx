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

    it("Renders a heading with error status code", () => {
        const status = 404;

        render(<ErrorPage status={status} message={""} />);

        



        
        const heading = screen.queryByRole(
            "heading", 
            { name: /404/i }
        );

        expect(heading).toBeInTheDocument();
    })

    it("Renders error with different status", () => {
        const status = 403;

        render(<ErrorPage status={status} message={""} />);

        const heading = screen.queryByRole(
            "heading",
            { name: /403/i },
        );
        
        expect(heading).toBeInTheDocument();
    })

    it("Renders a heading with the error message", () => {
        const errorMessage = "Error Message";

        render(<ErrorPage status={404} message={errorMessage} />);

        const messageHeading = screen.queryByRole(
            "heading",
            { name: /Error Message/i },
        )

        expect(messageHeading).toBeInTheDocument();
    })

    it("Renders heading with a different error message", () => {
        const errorMessage = "Not Found";

        render(<ErrorPage status={404} message={errorMessage} />);

        const messageHeading = screen.queryByRole(
            "heading",
            { name: /Not Found/i },
        );

        expect(messageHeading).toBeInTheDocument();
    })

    it("Renders a link", () => {
        render(<ErrorPage status={404} message={""} />);

        const links = screen.queryAllByRole("link");

        expect(links).toBeGreaterThanOrEqual(1);
    })
})