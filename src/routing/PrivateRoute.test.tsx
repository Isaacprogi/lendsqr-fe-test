import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import renderer from 'react-test-renderer';
import {vi} from 'vitest'

describe('test for private route component', ()=>{
    const setShowSideBar = vi.fn();
    const showSideBar = false;

    test('should match snapshot', async () => {
      const tree = renderer.create( <MemoryRouter>
        <PrivateRoutes auth={true} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot();
  
    });

  test('renders PrivateRoutes component with authenticated user', async() => {
    render(
      <MemoryRouter>
        <PrivateRoutes auth={true} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </MemoryRouter>
    );
  });
})
