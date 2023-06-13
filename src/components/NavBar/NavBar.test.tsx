import { fireEvent, render, screen } from '@testing-library/react';
import { NavBar } from './NavBar'
import renderer from 'react-test-renderer';


describe('test for NavBar component', () => {
    test('top right drawer should function perfectly', () => {
        render(<NavBar />)
        const FaBarsSpanElement = screen.getByTestId('users-span')
        const FaBarsDivElement = screen.getByTestId('users-div')
        const RightDrawerElement = screen.getByTestId('right-drawer')
        const FaTimesSpanElement = screen.getByTestId('fatimes-span')

        fireEvent.click(FaBarsSpanElement)
        expect(FaBarsDivElement).toHaveClass('hidden')
        expect(RightDrawerElement).toHaveClass('visible')

        fireEvent.click(FaTimesSpanElement)
        expect(RightDrawerElement).not.toHaveClass('visible')
        expect(FaBarsDivElement).not.toHaveClass('hidden')

    })

    test('should match snapshot', async () => {
        const tree = renderer.create(<NavBar/>).toJSON();
        expect(tree).toMatchSnapshot();
      });
})