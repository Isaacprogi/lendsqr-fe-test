import { render } from '@testing-library/react';
import { describe, it, test } from 'vitest';
import { DashBoard } from './DashBoard';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

describe('DashBoard', () => {

    it('renders DashBoard component', () => {
        const { getByText } = render(
            <DashBoard/>
        );

        expect(getByText('DashBoard')).toBeInTheDocument();
    });

    test('should match snapshot', async () => {
        const tree = renderer.create(
            <BrowserRouter>
                <DashBoard />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
