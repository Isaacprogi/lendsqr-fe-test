import React from 'react';
import { UserDetails } from './UserDetails';
import { render, waitFor, screen, act, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { BASE_URL } from '../../services/urls';
import { userDetailsMockData } from '../../ts/mockdata';
import renderer from 'react-test-renderer';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('UserDetails', () => {
  const dropDownActive = false;
  const setDropDownActive = jest.fn();
  const showSideBar = false;
  const setShowSideBar = jest.fn();

  test('data should be preent after api call is made', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/user-details/${1}`]}>
          <Routes>
            <Route path='/user-details/:id' element={<UserDetails
              dropDownActive={dropDownActive}
              setDropDownActive={setDropDownActive}
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
            />} />
          </Routes>
        </MemoryRouter>
      )
    });
    mockedAxios.get.mockResolvedValueOnce(userDetailsMockData)
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/1`)
    expect(axios.get).toHaveBeenCalledTimes(1)
    waitFor(() => {
      const divElement = screen.getByTestId('user-amount')
      expect(divElement.innerText).toBe(userDetailsMockData.accountBalance)
    })
  })


  test('side-bar-button', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <UserDetails
            dropDownActive={dropDownActive}
            setDropDownActive={setDropDownActive}
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        </BrowserRouter>
      )
    });
    waitFor(() => {
      const buttonElement = screen.getByTestId('sidebar-button')
      expect(buttonElement).toHaveClass('reduce')
      expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument()
      fireEvent.click(buttonElement)
      expect(buttonElement).toHaveClass('enlarge')
      expect(screen.getByTestId('chevron-left-icon')).toBeInTheDocument()
    })
  })

  test('should match snapshot', async () => {
    const tree = renderer.create(<BrowserRouter>
    <UserDetails
      dropDownActive={dropDownActive}
      setDropDownActive={setDropDownActive}
      showSideBar={showSideBar}
      setShowSideBar={setShowSideBar}
    />
    </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();

  });

});

