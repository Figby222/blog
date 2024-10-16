import { describe, it, expect, vi } from "vitest";
import { screen, render as _render, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlogPost from "../src/components/BlogPost.jsx";
import userEvent from "@testing-library/user-event";

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

describe("New comment", () => {
    it("Renders a textbox for a new comment", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: []
        })

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        expect(screen.queryByRole("textbox"))
            .toBeInTheDocument();
    })

    it("Has new comment placeholder", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: []
        })

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        expect(screen.queryByRole("textbox").placeholder)
            .toMatch(/New Comment/i);
    })

    it("Has the correct value typed in", async () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: []
        })

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const textbox = screen.queryByRole("textbox");


        const user = userEvent.setup();

        await user.type(textbox, "Test Textbox Text");

        expect(textbox.value)
            .toMatch(/Test Textbox Text/i);
    })

    it("Has different value typed in", async () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: []
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        const textbox = screen.queryByRole("textbox");

        const user = userEvent.setup();

        await user.type(textbox, "Different Test Textbox Value");

        expect(textbox.value)
            .not.toMatch(/Test Textbox Text/i);

        expect(textbox.value)
            .toMatch(/Different Test Textbox Value/i);
    })
})

describe("New Comment Submit Button", () => {
    it("Exists", () => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: []
        });

        render(<BlogPost useAllData={mockUseAllData} postId={4} />);

        expect(screen.queryByRole("button", { name: /Comment/i }))
            .toBeInTheDocument();
    })
    
    it("Calls useAllData", async() => {
        const mockUseAllData = getUseAllDataMock(false, false, {
            title: "Test Title",
            text: "Test Text",
            comments: []
        });
        const mockCreateComment = vi.fn(() => {})

        render(<BlogPost useAllData={mockUseAllData} postId={4} createComment={mockCreateComment} />);

        const textbox = screen.queryByRole("textbox");
        const submitButton = screen.queryByRole("button",
            { name: /Comment/i }
        );
        const user = userEvent.setup();
        await user.type(textbox, "Test Text");
        await user.click(submitButton);

        expect(mockCreateComment).toHaveBeenCalledWith(4, "Test Text");
    })
})