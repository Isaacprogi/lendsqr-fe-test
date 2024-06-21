import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import renderer from 'react-test-renderer';

describe('test for private route component', ()=>{
    test('should match snapshot', async () => {
      const tree = renderer.create( <MemoryRouter>
        <PrivateRoutes auth={true}  />
      </MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot();
  
    });

  test('renders PrivateRoutes component with authenticated user', async() => {
    render(
      <MemoryRouter>
        <PrivateRoutes auth={true} />
      </MemoryRouter>
    );
  });
})
