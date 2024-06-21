import { fireEvent, render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';  // Import MemoryRouter

describe('NavBar Component', () => {
    test('top right drawer should function perfectly', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );

        const FaBarsElement = screen.getByTestId('fa-bars');
        const SearchIconElement = screen.getByTestId('search-icon');
        const DocsSpanElement = screen.getByTestId('docs-span');
        const NotificationIconElement = screen.getByTestId('notification-icon');
        const UserNameElement = screen.getByTestId('user-name-1');
        const ArrowDownIconElement = screen.getByTestId('arrow-down-icon');

        expect(SearchIconElement).toBeInTheDocument();
        expect(DocsSpanElement).toBeInTheDocument();
        expect(NotificationIconElement).toBeInTheDocument();
        expect(UserNameElement).toBeInTheDocument();
        expect(ArrowDownIconElement).toBeInTheDocument();

        fireEvent.click(FaBarsElement);
        const FaTimesElement = screen.getByTestId('fa-times');
        expect(FaTimesElement).toBeInTheDocument();

        fireEvent.click(FaTimesElement);
        expect(FaBarsElement).toBeInTheDocument();
    });

    test('should match snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
