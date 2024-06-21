import { fireEvent, render, screen } from '@testing-library/react';
import {StatusBoardItem} from './StatusBoardItem'
import Img from '../../assets/images/isaac.jpg'
import renderer from 'react-test-renderer'

describe('test for NavBar component', ()=>{
   
    test('props shoud be present', ()=>{
        render(<StatusBoardItem logo={Img} title='Users' value='2000'  />)
        expect(screen.getByRole('img',{name:'status-board-logo'})).toHaveAttribute('src', Img)
        expect(screen.getByText(/Users/i)).toBeInTheDocument()
        expect(screen.getByText(/2000/i)).toBeInTheDocument()
    })  

    test('should match snapshot', async () => {
        const tree = renderer.create(<StatusBoardItem logo={Img} title='Users' value='2000'  />).toJSON();
        expect(tree).toMatchSnapshot();
      });
})