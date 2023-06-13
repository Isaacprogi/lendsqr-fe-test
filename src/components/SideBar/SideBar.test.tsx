import { render } from '@testing-library/react';
import { SideBar } from './SideBar'
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'



describe('test for SideBar component', () => {
  test('test for SideBar component', () => {
    render(<BrowserRouter><SideBar /></BrowserRouter>)
  })

  test('should match snapshot', async () => {
    const tree = renderer.create(<BrowserRouter><SideBar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})























