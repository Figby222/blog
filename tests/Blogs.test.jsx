import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render, getUseAllDataMock } from "../lib/testing-utils.jsx";
import Blogs from "../src/components/Blogs.jsx";

describe("Blogs existence", () => {
    it("Exists", () => {
        expect(Blogs).toBeDefined();
    })

    it("Is a function", () => {
        expect(Blogs).toBeTypeOf("function");
    })
})

describe("useAllData", () => {
    it("Calls useAllData", () => {
        const mockUseAllData = getUseAllDataMock(false, true, null);

        render(<Blogs useAllData={mockUseAllData} />);

        expect(mockUseAllData).toHaveBeenCalled();
    })

    it("Shows loading if loading", () => {
        const mockUseAllData = getUseAllDataMock(false, true, null);

        render(<Blogs useAllData={mockUseAllData} />);

        expect(screen.queryByText(/Loading/i))
            .toBeInTheDocument();
    })

    it("Doesn't show loading if not loading", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            blogs: [
                {
                    id: 4,
                    title: "Test Blog Title",
                    username: "Test Blog Username"
                }
            ]
        });

        render(<Blogs useAllData={mockUseAllData} />);

        expect(screen.queryByText(/Loading/i))
            .not.toBeInTheDocument();
    })
})

describe("Blog list", () => {
    it("Renders a Blog Title", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            blogs: [
                {
                    id: 4,
                    title: "Test Blog Title",
                    username: "Test Blog Username"     
                }
            ]
        });

        render(<Blogs useAllData={mockUseAllData} />);

        expect(screen.queryByText(/Test Blog Title/i)).toBeInTheDocument();
    })

    it("Renders a different Blog Title", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            blogs: [
                {
                    id: 4,
                    title: "Test Different Blog Title",
                    username: "Test Blog Username"
                }
            ]
        });

        render(<Blogs useAllData={mockUseAllData} />);

        expect(screen.queryByText("Test Blog Title"))
            .not.toBeInTheDocument();

        expect(screen.queryByText(/Test Different Blog Title/i))
            .toBeInTheDocument();
    })

    it("Renders a username text", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            blogs: [
                {
                    id: 4,
                    title: "Test Blog Title",
                    username: "Test Blog Username"
                }
            ]
        });

        render(<Blogs useAllData={mockUseAllData} />);

        expect(screen.queryByText(/Test Blog Username/i))
            .toBeInTheDocument();
    })
})