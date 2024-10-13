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

    it("Renders username text", () => {
        render(
            <Comment username={"quom"} timestamp={`TimeStamp`}>
                This is a comment
            </Comment>
        )

        const username = screen.queryByText(/quom/i);

        expect(username).toBeInTheDocument();
    })

    it("Renders a different username", () => {
        render(
            <Comment username={"SuperCoolAwesomeUser"} timestamp={`TimeStamp`}>
                This is a comment
            </Comment>
        )

        const username = screen.queryByText(/SuperCoolAwesomeUser/i);

        expect(username).toBeInTheDocument();
    })

    it("Renders comment text", () => {
        render(
            <Comment username={"quom"} timestamp={`TimeStamp`}>
                This is a comment
            </Comment>
        )

        expect(screen.queryByText(/This is a comment/i)).toBeInTheDocument();
    })

    it("Renders different comment text", () => {
        render(
            <Comment username={"quom"} timestamp={`TimeStamp`}>
                Some different comment text
            </Comment>
        )

        const text = screen.queryByText(/Some different comment text/i);

        expect(text).toBeInTheDocument();
    })

    it("Renders timestamp text content", () => {
        render(
            <Comment username={"quom"} timestamp={`TimeStamp`}>
                This is a comment
            </Comment>
        )

        const timestamp = screen.queryByText(/TimeStamp/i);

        expect(timestamp).toBeInTheDocument();
    })
})