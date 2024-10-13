import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../lib/testing-utils.jsx";
import Form from "../src/components/Form.jsx";

describe("Form existence", () => {
    it("Exists", () =>  {
        expect(Form).toBeDefined();
    })
})