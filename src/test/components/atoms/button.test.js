// @packages
import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import 'regenerator-runtime';

// @components
import ActionButton from '../../../components/atoms/button';


describe('Testing the component <ActionButton />', () => {
    test('Test button label', async () => {
        const component = render(<ActionButton label="exampleButton" />);

        const buttonLabel = await component.findByText('exampleButton');

        expect(buttonLabel).not.toBe(null);
    });

    test('Test button on click action', async () => {
        const onClickAction = jest.fn();

        const component = render(
            <ActionButton label="exampleButton" onClick={onClickAction} />
        );

        const buttonLabel = await component.findByText('exampleButton');

        await act(async () => fireEvent.click(buttonLabel));

        expect(onClickAction).toHaveBeenCalled();
        expect(onClickAction).toHaveBeenCalledTimes(1);
    });

    test('Test button with start icon', async () => {
        const START_ICON = 'add';

        render(
            <ActionButton label="exampleButton" startIcon={START_ICON} />
        );

        const buttonLabel = document.querySelector('[class="MuiButton-label"]');
        
        expect(buttonLabel.firstChild.firstChild.textContent).toBe(' '+ START_ICON +' ');
    });
});
