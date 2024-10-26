import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils";
import Header from "../src/components/Header.jsx";

describe("Header existence", () => {
    it("Exists", () => {
        expect(Header).toBeDefined();
    })
})