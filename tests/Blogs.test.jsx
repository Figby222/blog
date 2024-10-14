import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render, getUseAllDataMock } from "../lib/testing-utils.jsx";
import Blogs from "../src/components/Blogs.jsx";

describe("Blogs existence", () => {
    it("Exists", () => {
        expect(Blogs).toBeDefined();
    })

    it("Is a function", () => {
        expect(Blogs).toBeTypeOf("function");
    })
})

describe("useAllData", () => {
    it("Calls useAllData", () => {
        const mockUseAllData = getUseAllDataMock(false, true, null);

        render(<Blogs useAllData={mockUseAllData} />);

        expect(mockUseAllData).toHaveBeenCalled();
    })

    it("Shows loading if loading", () => {
        const mockUseAllData = getUseAllDataMock(false, true, null);

        render(<Blogs useAllData={mockUseAllData} />);

        expect(screen.queryByText(/Loading/i))
            .toBeInTheDocument();
    })
})