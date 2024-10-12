import { describe, it, expect } from "vitest";
import { screen, render as _render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlogPost from "../src/components/BlogPost.jsx";

const render = (component) => {
    return _render(<MemoryRouter>
        { component }
    </MemoryRouter>)
}



describe("BlogPost", () => {
    it("Exists", () => {
        expect(BlogPost).toBeDefined();
    })

    it("Is a function", () => {
        expect(BlogPost).toBeTypeOf("function");
    })
    a
})
