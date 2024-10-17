import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import LogInPage from "../src/components/LogInPage.jsx";

describe("LogInPage existence", () => {
    it("Exists", () => {
        expect(LogInPage).toBeDefined();
    })
    
    it("Is a function", () => {
        expect(LogInPage).toBeTypeOf("function");
    })
})