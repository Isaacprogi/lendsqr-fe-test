import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { UserData } from './UserData'
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import renderer from 'react-test-renderer'
const dataProps = {
    user: {
        id: '1',
        orgName: 'lendsqr',
        userName: 'rema',
        email: "rema@gmail.com",
        phoneNumber: "09157065783",
        createdAt: "ririir",
        status:'Active'
    }
}

describe('test for NavBar component', () => {

    const UserDataComponent = () => {
        const [displayStatusOptions, setDisplayStatusOptions] = useState<string>('')
        return <UserData user={dataProps.user} displayStatusOptions={displayStatusOptions} setDisplayStatusOptions={setDisplayStatusOptions}/>
    }

    test('props shoud be present', () => {
        render(<BrowserRouter>
            <UserDataComponent/>
             </BrowserRouter>)
        expect(screen.getByText('lendsqr')).toBeInTheDocument()
        expect(screen.getByText('rema')).toBeInTheDocument()
        expect(screen.getByText('rema@gmail.com')).toBeInTheDocument()
        expect(screen.getByText('09157065783')).toBeInTheDocument()       
    })

    test('status options should display properly', async()=>{
        render(<BrowserRouter>
            <UserDataComponent/>
             </BrowserRouter>)
        waitFor(()=>{
            const buttonElement = screen.getByRole('img', {name:"three-dots"})
            const divELement = screen.getByTestId('status-options-id')
            const viewElement = screen.getByTestId('view-list-span')
            const blackElement = screen.getByTestId('black-list-span')
            const activeElement = screen.getByTestId('active-list-span')
            expect(divELement).not.toHaveClass("visible")
            fireEvent.click(buttonElement)
            expect(divELement).toHaveClass('visible')
            fireEvent.click(buttonElement)
            expect(divELement).not.toHaveClass('visible')
            fireEvent.click(buttonElement)
            expect(divELement).toHaveClass('visible')

            fireEvent.click(viewElement)
            expect(divELement).not.toHaveClass("visible")

            fireEvent.click(blackElement)
            expect(divELement).not.toHaveClass("visible")
            expect(dataProps.user.status).toBe('Blacklisted')

            fireEvent.click(activeElement)
            expect(divELement).not.toHaveClass("visible")
            expect(dataProps.user.status).toBe('Active')
        })
        

    })

    test('should match snapshot', async () => {
        const tree = renderer.create(<BrowserRouter>
            <UserDataComponent/>
             </BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
      });
})