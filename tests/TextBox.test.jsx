import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import TextBox from "../src/components/TextBox.jsx";

describe("TextBox existence", () => {
    it("Exists", () => {
        expect(TextBox).toBeDefined();
    })

    it("Is a function", () => {
        expect(TextBox).toBeTypeOf("function");
    })
})