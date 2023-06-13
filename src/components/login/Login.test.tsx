import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from './Login'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import renderer from 'react-test-renderer'



describe('test for Login component', () => {
   beforeEach(() => {
      render(
         <AuthProvider>
            <BrowserRouter>
               <Login />
            </BrowserRouter>
         </AuthProvider>
      )
   })


   test('render email input', async () => {
      const emailInputEl = screen.getByPlaceholderText('Email')
      expect(emailInputEl).toBeInTheDocument()
   })

   test('render password input', () => {
      const passwordInputEl = screen.getByPlaceholderText('Password')
      expect(passwordInputEl).toBeInTheDocument()
   })

   test(' render button element', () => {
      const buttonEl = screen.getByRole("button")
      expect(buttonEl).toBeInTheDocument()
      expect(buttonEl.textContent).toBe('LOG IN')
   })


   test('email input should empty', () => {
      const emailInputEl = screen.getByPlaceholderText("Email")
      expect(emailInputEl.textContent).toBe("")
   })

   test('password input should empty', () => {
      const passwordInputEl = screen.getByPlaceholderText("Password")
      expect(passwordInputEl.textContent).toBe("")
   })

   test('button element should be disabled', () => {
      const buttonEl = screen.getByRole("button")
      expect(buttonEl).toBeDisabled()
   })

   test("email input element should  change", () => {
      const emailInputEl = screen.getByPlaceholderText<HTMLInputElement>(/email/i)
      const testValue = "test"

      fireEvent.change(emailInputEl, { target: { value: testValue } })
      expect(emailInputEl.value).toBe(testValue)
   })


   test("password input element should change", () => {
      const passwordInputEl = screen.getByPlaceholderText<HTMLInputElement>(/password/i)
      const testValue = "test"

      fireEvent.change(passwordInputEl, { target: { value: testValue } })
      expect(passwordInputEl.value).toBe(testValue)
   })

   test("button should not be disabled when inputs exist", () => {
      const emailInputEl = screen.getByPlaceholderText(/email/i)
      const passwordInputEl = screen.getByPlaceholderText(/password/i)
      const buttonEl = screen.getByRole("button")
      const testValue = "check"

      fireEvent.change(emailInputEl, { target: { value: testValue } })
      fireEvent.change(passwordInputEl, { target: { value: testValue } })

      expect(buttonEl).not.toBeDisabled()
   })

   test('should match snapshot', async () => {
      const tree = renderer.create(<AuthProvider>
         <BrowserRouter>
            <Login />
         </BrowserRouter>
      </AuthProvider>).toJSON();
      expect(tree).toMatchSnapshot();
   });
})























