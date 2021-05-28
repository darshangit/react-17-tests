import { screen, render } from "@testing-library/react"
import Asyncs from "./Async"

describe('Async Component', () => {
    test("renders post if request succeeds", async () => {
        render(<Asyncs />)

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})