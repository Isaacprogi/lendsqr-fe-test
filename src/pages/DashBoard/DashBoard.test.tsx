import React from 'react';
import { render } from '@testing-library/react';
import { DashBoard } from './DashBoard';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

describe('DashBoard', () => {
    const dropDownActive = false;
    const setShowSideBar = jest.fn();
    const showSideBar = false;

    it('renders DashBoard component', () => {

        const { getByText } = render(
            <DashBoard
                dropDownActive={dropDownActive}
                setShowSideBar={setShowSideBar}
                showSideBar={showSideBar}
            />
        );

        expect(getByText('DashBoard')).toBeInTheDocument();
    });

    test('should match snapshot', async () => {
        const tree = renderer.create(<BrowserRouter>
            <DashBoard
                dropDownActive={dropDownActive}
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
            />
        </BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();

    });
});