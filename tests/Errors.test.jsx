import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import Errors from "../src/components/Errors.jsx";

describe("Errors existence", () => {
    it("Exists", () => {
        expect(Errors).toBeDefined();
    })

    it("Is a function", () => {
        expect(Errors).toBeTypeOf("function");
    })
})