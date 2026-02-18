import { render, cleanup } from "@testing-library/react";
import { expect, test, vi, afterEach } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";

const queryClient = new QueryClient();

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

afterEach(cleanup);

test("can submit contact form", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify({ success: "ok" }));

  const screen = render(
    <QueryClientProvider client={queryClient}>
      <Route.options.component />
    </QueryClientProvider>,
  );

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const messageInput = screen.getByPlaceholderText("Message");

  const testData = {
    name: "John Doe",
    email: "johndoe@email.com",
    message: "Hello, this is a test message.",
  };

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  messageInput.value = testData.message;

  const btn = screen.getByRole("button");
  btn.click();

  const h3 = await screen.findByRole("heading", { level: 3 });
  expect(h3.innerText).toContain("Submitted");

  const requests = fetchMocker.requests();
  expect(requests.length).toBe(1);
  expect(requests[0].url).toBe("/api/contact");
  expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
    method: "POST",
    body: JSON.stringify(testData),
    headers: { "Content-Type": "application/json" },
  });
});
