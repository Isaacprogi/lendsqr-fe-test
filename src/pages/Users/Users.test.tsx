import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import { Users } from './Users';
import { BrowserRouter } from 'react-router-dom';
import { userMockData } from '../../ts/mockdata';
import axios from 'axios'
import { BASE_URL } from '../../services/urls';
import renderer from 'react-test-renderer';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>


describe('test for User Details Component', () => {
    const dropDownActive = false;
    const setDropDownActive = jest.fn();
    const showSideBar = false;
    const setShowSideBar = jest.fn();


    test('data should be preent after api call is made', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                 <Users
                   dropDownActive={dropDownActive}
                   setDropDownActive={setDropDownActive}
                   showSideBar={showSideBar}
                   setShowSideBar={setShowSideBar}
                 />
                </BrowserRouter>
               )
          });
        mockedAxios.get.mockResolvedValueOnce(userMockData)
        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}`)
        expect(axios.get).toHaveBeenCalledTimes(1)
        waitFor(() => {
            const divElements = screen.getAllByTestId('user-data-box')
            expect(divElements.length).toBe(2)
            expect(divElements[0].innerHTML).toContain(<span className='organization'>{userMockData[0].orgName}</span>)
        })
    })

    test('side-bar-button', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                 <Users
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
        <Users
          dropDownActive={dropDownActive}
          setDropDownActive={setDropDownActive}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        </BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    
      });





})