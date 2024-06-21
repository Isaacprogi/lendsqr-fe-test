import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import { describe, test, vi, beforeEach, afterEach } from 'vitest';
import { Users } from './Users';
import { BrowserRouter } from 'react-router-dom';
import { userMockData } from '../../ts/mockdata';
import axios from 'axios';
import renderer from 'react-test-renderer';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Users Component Tests', () => {
    beforeEach(() => {
        mockedAxios.get.mockResolvedValueOnce({ data: userMockData });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('data should be present after API call is made', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Users />
                </BrowserRouter>
            );
        });

        expect(axios.get).toHaveBeenCalledWith(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`);
        expect(axios.get).toHaveBeenCalledTimes(1);

        await waitFor(() => {
            const divElements = screen.getAllByTestId('user-data-box');
            expect(divElements.length).toBe(userMockData.length);
            expect(divElements[0].innerHTML).toContain(`<span class="organization">${userMockData[0].orgName}</span>`);
        });
    });

    test('should match snapshot', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Users />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should filter users based on filter inputs', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Users />
                </BrowserRouter>
            );
        });

        const usernameInput = screen.getByPlaceholderText('Username');
        fireEvent.change(usernameInput, { target: { value: userMockData[0].userName } });

        const filterButton = screen.getByTestId('filter');
        fireEvent.click(filterButton);

        await waitFor(() => {
            const divElements = screen.getAllByTestId('user-data-box');
            expect(divElements.length).toBe(2);
            expect(divElements[0].innerHTML).toContain(`<span class="organization">${userMockData[0].orgName}</span>`);
        });
    });

});
