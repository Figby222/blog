import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorPage from "../src/components/ErrorPage.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Error Page", () => {
    it("Exists", () => {
        expect(ErrorPage).toBeDefined();
    });
    
    it("Is a function", () => {
        expect(ErrorPage).toBeTypeOf("function");
    });

    it("Renders a heading", () => {
        render(<MemoryRouter>
            <ErrorPage status={404} message={"AAAA"} />
        </MemoryRouter>);

        const headings = screen.queryAllByRole("heading");

        expect(headings.length).toBeGreaterThanOrEqual(1);
    })

    it("Renders a heading with error status code", () => {
        const status = 404;

        render(<MemoryRouter>
            <ErrorPage status={status} message={""} />
        </MemoryRouter>);

        



        
        const heading = screen.queryByRole(
            "heading", 
            { name: /404/i }
        );

        expect(heading).toBeInTheDocument();
    })

    it("Renders error with different status", () => {
        const status = 403;

        render(<MemoryRouter>
            <ErrorPage status={status} message={""} />
        </MemoryRouter>);

        const heading = screen.queryByRole(
            "heading",
            { name: /403/i },
        );
        
        expect(heading).toBeInTheDocument();
    })

    it("Renders a heading with the error message", () => {
        const errorMessage = "Error Message";

        render(<MemoryRouter>
            <ErrorPage status={404} message={errorMessage} />
        </MemoryRouter>);

        const messageHeading = screen.queryByRole(
            "heading",
            { name: /Error Message/i },
        )

        expect(messageHeading).toBeInTheDocument();
    })

    it("Renders heading with a different error message", () => {
        const errorMessage = "Not Found";

        render(<MemoryRouter>
            <ErrorPage status={404} message={errorMessage} />
        </MemoryRouter>);

        const messageHeading = screen.queryByRole(
            "heading",
            { name: /Not Found/i },
        );

        expect(messageHeading).toBeInTheDocument();
    })

    it("Renders a link", () => {
        render(<MemoryRouter>
            <ErrorPage status={404} message={""} />
        </MemoryRouter>);

        const links = screen.queryAllByRole("link");

        expect(links.length).toBeGreaterThanOrEqual(1);
    })
})