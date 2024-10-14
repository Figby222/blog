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

        const loadingElements = screen.queryAllByText(/loading/i);

        expect(loadingElements.length).toBeGreaterThanOrEqual(1);
    })

    it("Renders heading", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text",
            comments: [],
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const headings = screen.queryAllByRole("heading");

        expect(headings.length).toBeGreaterThanOrEqual(1);
    })

    it("Renders heading on screen", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text",
            comments: [],
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
            text: "Blog Text",
            comments: []
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />)

        const paragraphs = screen.queryAllByRole("paragraph");

        expect(paragraphs.length).toBeGreaterThanOrEqual(1);
    })

    it("Renders paragraph with correct text", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text",
            comments: []
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
            text: "Different text",
            comments: []
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
            text: "Different text",
            comments: []
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const textParagraph = screen.queryByText(/Different Text/i);

        expect(textParagraph).toBeInTheDocument();
    })

    it("Only renders loading when loading", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text",
            comments: [],
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const loadingElements = screen.queryAllByText(/loading/i);

        expect(loadingElements.length).not.toBeGreaterThanOrEqual(1);
    })

    it("Only renders error when error", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Blog Title",
            text: "Blog Text",
            comments: [],
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const errorHeading = screen.queryByRole(
            "heading",
            { name: /error/i },
        );

        expect(errorHeading).not.toBeInTheDocument();
    })

    it("Renders a comment", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: [
                {
                    id: 4,
                    creator: "Test Comment Username",
                    text: "Test Comment Text",
                    timestamp: "Test TimeStamp",
                }
            ]
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        expect(screen.queryByText(/Test Comment Username/i))
            .toBeInTheDocument();

        expect(screen.queryByText(/Test Comment Text/i))
            .toBeInTheDocument();

        expect(screen.queryByText(/Test TimeStamp/i))
            .toBeInTheDocument();
    })

    it("Renders a different comment", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: [
                {
                    id: 5,
                    creator: "A different username",
                    text: "Different Comment Text",
                    timestamp: "A different TimeStamp",
                }
            ]
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        expect(screen.queryByText(/Test Comment Username/i))
            .not.toBeInTheDocument();

        expect(screen.queryByText(/Text Comment Text/i))
            .not.toBeInTheDocument();

        expect(screen.queryByText(/Test Timestamp/i))
            .not.toBeInTheDocument();

        expect(screen.queryByText(/A different username/i))
            .toBeInTheDocument();

        expect(screen.queryByText(/Different Comment Text/i))
            .toBeInTheDocument();

        expect(screen.queryByText(/A different TimeStamp/i))
            .toBeInTheDocument();
            
    })

    it("Renders multiple comments", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: [
                {
                    id: 4,
                    creator: "Test Comment Username",
                    text: "Test Comment Text",
                    timestamp: "Test TimeStamp",
                },
                {
                    id: 5,
                    creator: "A different username",
                    text: "Different Comment Text",
                    timestamp: "A different TimeStamp",
                }
            ]
        });
        
        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        expect(screen.queryByText(/Test Comment Username/i))
            .toBeInTheDocument();

        expect(screen.queryByText(/Test Comment Text/i))
            .toBeInTheDocument();

        expect(screen.queryByText(/Test Timestamp/i))
            .toBeInTheDocument();

        expect(screen.queryByText(/A different username/i))
            .toBeInTheDocument();

        expect(screen.queryByText(/Different Comment Text/i))
            .toBeInTheDocument();

        expect(screen.queryByText(/A different TimeStamp/i))
            .toBeInTheDocument();
    })

    it("Renders a heading for comments", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: [
                {
                    id: 4,
                    creator: "Test Comment Username",
                    text: "Test Comment Text",
                    timestamp: "Test TimeStamp",
                },
                {
                    id: 5,
                    creator: "A different username",
                    text: "Different Comment Text",
                    timestamp: "A different TimeStamp",
                }
            ]
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        expect(screen.queryByRole("heading", { name: /Comments/i })).toBeInTheDocument();
    })

})