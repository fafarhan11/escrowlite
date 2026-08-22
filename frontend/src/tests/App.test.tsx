import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import App from "../App";

afterEach(() => {
    cleanup();
});

describe("EscrowLite frontend", () => {
    test("renders the application title", () => {
        render(<App />);
        expect(
            screen.getByRole("heading", { name: "EscrowLite" })
        ).toBeTruthy();
    });

    test("renders the create escrow form", () => {
        render(<App />);

        expect(
            screen.getByRole("heading", { name: "Create Escrow" })
        ).toBeTruthy();

        expect(
            screen.getByPlaceholderText("Enter client address", { exact: true })
        ).toBeTruthy();

        expect(
            screen.getByPlaceholderText("Enter freelancer address", { exact: true })
        ).toBeTruthy();
    });

    test("renders the amount field", () => {
        render(<App />);

        expect(
            screen.getByPlaceholderText("Enter amount", { exact: true })
        ).toBeTruthy();
    });
});
