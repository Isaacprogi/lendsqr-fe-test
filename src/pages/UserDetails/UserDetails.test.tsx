import { UserDetails } from './UserDetails';
import { render, waitFor, screen, act } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { userDetailsMockData } from '../../utils/data/mockdata';
import { vi } from 'vitest';
import renderer from 'react-test-renderer';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('UserDetails', () => {

  test('data should be present after API call is made', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: userDetailsMockData });

    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/user-details/1`]}>
          <Routes>
            <Route path='/user-details/:id' element={<UserDetails />} />
          </Routes>
        </MemoryRouter>
      );
    });

    expect(axios.get).toHaveBeenCalledWith(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1`);
    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const divElement = screen.getByTestId('user-amount');
      console.log(divElement.innerHTML); // Debugging: log the innerHTML of the div element
      expect(divElement).toBeInTheDocument();
      expect(divElement.innerHTML).toBe(userDetailsMockData.accountBalance);
    });
  });

  test('should match snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <UserDetails />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
