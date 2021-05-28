import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Good to see you! if the button was NOT clicked", () => {
    render(<Greeting />);

    const element = screen.getByText("Good to see you!", { exact: true });
    expect(element).toBeInTheDocument();
  });

  test("renders Changed if the button was clicked", () => {
    render(<Greeting />);

    const btn = screen.getByRole("button");
    userEvent.click(btn);
    const element = screen.getByText("Changed", { exact: true });

    expect(element).toBeInTheDocument();
  });
  test("does not render Good to see you! if the button was clicked", () => {
    render(<Greeting />);

    const btn = screen.getByRole("button");
    userEvent.click(btn);
    const element = screen.queryByText("Good to see you!", { exact: true });

    expect(element).toBeNull();
  });
});
