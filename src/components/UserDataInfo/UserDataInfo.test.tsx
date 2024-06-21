import { render, screen } from '@testing-library/react';
import {UserDataInfo} from './UserDataInfo'
import renderer from 'react-test-renderer'


describe('test for NavBar component', ()=>{   
    test('props shoud be present', ()=>{
        render(<UserDataInfo dataIdTitle='dataIdTitle' dataTitle='dataTitle' dataValue='dataValue'  dataIdValue='dataIdValue'   />)
        expect(screen.getByTestId('dataIdTitle').textContent).toBe('dataTitle')
        expect(screen.getByTestId('dataIdValue').textContent).toBe('dataValue')
    })  
    test('should match snapshot', async () => {
        const tree = renderer.create(<UserDataInfo dataIdTitle='dataIdTitle' dataTitle='dataTitle' dataValue='dataValue'  dataIdValue='dataIdValue'   />).toJSON();
        expect(tree).toMatchSnapshot();
      });

})