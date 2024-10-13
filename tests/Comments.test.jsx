import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils";
import Comment from "../src/components/Comment.jsx"





describe("Comment", () => {
    it("Exists", () => {
        expect(Comment).toBeDefined();
    })

    it("Is a function", () => {
        expect(Comment).toBeTypeOf("function");
    })

    it("Has a heading element", () => {
        render(
            <Comment username={"quom"} timestamp={`TimeStamp`}>
                This is a comment
            </Comment>
        )

        const headings = screen.queryAllByRole("heading");

        expect(headings.length).toBeGreaterThanOrEqual(1);
    })
})