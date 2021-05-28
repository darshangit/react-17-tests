import { screen, render } from "@testing-library/react";
import Asyncs from "./Async";

describe("Async Component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "firstpost" }],
    });
    render(<Asyncs />);

    const listItemElements = await screen.findAllByRole("listitem");
    const firstPostElement = screen.getByText("firstpost");
    expect(listItemElements).not.toHaveLength(0);
    expect(firstPostElement).toBeInTheDocument();
  });
});
