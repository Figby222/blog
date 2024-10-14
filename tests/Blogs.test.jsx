import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import Blogs from "../src/components/Blogs.jsx";

describe("Blogs existence", () => {
    it("Exists", () => {
        expect(Blogs).toBeDefined();
    })
})