import http from "../../helpers/http"

export const login = (email, password) => {
  const data= new URLSearchParams()
  data.append('email', email)
  data.append('password', password)
  return({
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login', data)
  })
}

export const getUserData = (token) => {
  return({
    type: 'AUTH_GET_USER',
    payload: http(token).get('/profile')
  })
}

export const getPhoneNumber = (token) => {
  return({
    type: 'AUTH_GET_PHONES',
    payload: http(token).get('/profile/phones')
  })
}

export const getBalance = (token) => {
  return({
    type: 'AUTH_GET_BALANCE',
    payload: http(token).get('/profile/balance')
  })
}

export const registerForm = (data) => {
  return({
    type: 'REGISTER_FORM',
    payload: {
      data: data
    }
  })
}

export const forgotPassword = (email) => {
  const params = new URLSearchParams()
  params.append('email', email)
  return({
    type: 'AUTH_FORGOT_PASSWORD',
    payload: http().post('auth/forgot-password?callback_url=http://localhost:3000', params)
  })
}

export const createNewPassword = (data) => {
  const params = new URLSearchParams()
  params.append('otp', data.otp)
  params.append('newPassword', data.newPassword)
  params.append('confirmPassword', data.confirmPassword)
  return({
    type: 'AUTH_NEW_PASSWORD',
    payload: http().post('auth/forgot-password', params)
  })
}

export const register = (data) => {
  const params = new URLSearchParams()
  params.append('fullName', data.fullName)
  params.append('email', data.email)
  params.append('password', data.password)
  params.append('pin', data.pin)

  return({
    type: 'AUTH_REGISTER',
    payload: http().post('/auth/register', params)
  })
}