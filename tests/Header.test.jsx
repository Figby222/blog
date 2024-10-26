import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils";
import Header from "../src/components/Header.jsx";

describe("Header existence", () => {
    it("Exists", () => {
        expect(Header).toBeDefined();
    })

    it("Is a function", () => {
        expect(Header).toBeTypeOf("function");
    })
})

describe("Links", () => {
    it("Renders a link", () => {
        const links = [
            {
                name: "Blogs",
                path: "/blogs",
                isCurrentPage: false,
            }
        ]

        render(<Header links={links} loggedInUser={null} />);

        const renderedLinks = screen.queryAllByRole("link");

        expect(renderedLinks.length).toBeGreaterThanOrEqual(1);
    })

    it("Doesn't render a link without links set", () => {
        const links = [];
        
        render(<Header links={links} loggedInUser={null} />);

        const renderedLinks = screen.queryAllByRole("link");
        
        expect(renderedLinks.length).not.toBeGreaterThanOrEqual(1);
    })

    it("Renders link with correct content", () => {
        const links = [
            {
                name: "Blogs",
                path: "/blogs",
                isCurrentPage: false,
            }
        ]

        render(<Header links={links} loggedInUser={null} />);

        expect(screen.queryByRole("link", { name: /Blogs/i }))
            .toBeInTheDocument();
    })



})