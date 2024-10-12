import { describe, it, expect, vi } from "vitest";
import { screen, render as _render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlogPost from "../src/components/BlogPost.jsx";

const render = (component) => {
    return _render(<MemoryRouter>
        { component }
    </MemoryRouter>)
}

const getUseAllDataMock = (error, loading, data) => {
    return vi.fn(() => {
        return { error, loading, data }
    })
}

describe("BlogPost", () => {
    it("Exists", () => {
        expect(BlogPost).toBeDefined();
    })

    it("Is a function", () => {
        expect(BlogPost).toBeTypeOf("function");
    })

    it("Renders loading if loading", () => {
        const mockUseAllData = getUseAllDataMock(false, true, null);
        
        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const loadingElement = screen.queryByText(/loading/i);

        expect(loadingElement).toBeInTheDocument();
    })

    it("Renders heading", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text",
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const headings = screen.queryAllByRole("heading");

        expect(headings.length).toBeGreaterThanOrEqual(1);
    })

    it("Renders heading on screen", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text",
        })

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const titleHeading = screen.queryByRole(
            "heading",
            { name: /Blog Title/i },
        );

        expect(titleHeading).toBeInTheDocument();
    })

    it("Renders paragraph", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text"
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />)

        const paragraphs = screen.queryAllByRole("paragraph");

        expect(paragraphs.length).toBeGreaterThanOrEqual(1);
    })

    it("Renders paragraph with correct text", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text"
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const textParagraph = screen.queryByText(/Blog Text/i);

        expect(textParagraph).toBeInTheDocument();
    })

    it ("Renders an error heading if error", () => {
        const mockUseAllData = getUseAllDataMock(true, false, null);

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const errorHeading = screen.queryByRole(
            "heading",
            { name: /error/i },
        )

        expect(errorHeading).toBeInTheDocument();
    })

    it("Renders a different title", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "A different title",
            text: "Different text"
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const titleHeading = screen.queryByRole(
            "heading",
            { name: /A different title/i }
        );

        expect(titleHeading).toBeInTheDocument();
    })

    it("Renders different text", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "A different title",
            text: "Different text"
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const textParagraph = screen.queryByText(/Different Text/i);

        expect(textParagraph).toBeInTheDocument();
    })

    it("Only renders loading when loading", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text",
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const loadingElement = screen.queryByText(/loading/i);

        expect(loadingElement).not.toBeInTheDocument();
    })

    it("Only renders error when error", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text",
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const errorHeading = screen.queryByRole(
            "heading",
            { name: /error/i },
        );

        expect(errorHeading).not.toBeInTheDocument();
    })

})