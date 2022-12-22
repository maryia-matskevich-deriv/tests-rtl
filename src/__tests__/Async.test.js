import React from "react";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";

describe("Async Examples", () => {

    it("waitingFor", async () => {// also we have waitForElementToBeRemoved()
        const setError = jest.fn();
        const error = {
            code: '',
            message: 'Error is occured',
            setError,
        };
        render(<FormError error={error}/>);
        const ok_btn = screen.getByText('OK');
        fireEvent.click(ok_btn);

        await waitFor(() => {
            expect(screen.queryByText('Error is occured')).not.toBeInTheDocument();
        })

    });
});

