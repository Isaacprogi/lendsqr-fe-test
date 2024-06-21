import { fireEvent, render, screen } from '@testing-library/react';
import { SideBarButton } from './SideBarButton';
import { useState } from 'react';
import renderer from 'react-test-renderer'


describe('test for User Details Component ', () => { 
     const MySideBarComponent = () => {
        const [showSideBar,setShowSideBar] = useState<boolean>(false)
        const[dropDownActive,setDropDownActive] = useState<boolean>(false)
        return <SideBarButton showSideBar={showSideBar} dropDownActive={dropDownActive} setShowSideBar={setShowSideBar}/>
     }
    test('side-bar-button', async () => {
        render(<MySideBarComponent/>)
        const buttonElement = screen.getByTestId('sidebar-button')
        expect(buttonElement).toHaveClass('reduce')
        expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument()

        fireEvent.click(buttonElement)
        expect(buttonElement).toHaveClass('enlarge')
        expect(screen.getByTestId('chevron-left-icon')).toBeInTheDocument()
    })
    test('should match snapshot', async () => {
        const tree = renderer.create(<MySideBarComponent/>).toJSON();
        expect(tree).toMatchSnapshot();
      });
    

})
