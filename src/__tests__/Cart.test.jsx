import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Cart from "../Cart";

afterEach(cleanup);

test("snapshot of empty cart", async () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
