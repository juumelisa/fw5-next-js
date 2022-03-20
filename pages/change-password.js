import { Form } from "react-bootstrap"
import FormInput from "../components/FormInput"
import Layout from "../components/Layout"
import Sidebar from "../components/SideBar"
import { FiLock } from "react-icons/fi"
import Button from "../components/Button"
import { useState } from "react"

const ChangePassword = () => {
  const [errPassword, setErrPassword] = useState(false)
  const [formFilled, setFormFilled] = useState(false)

  const changePassword = (e) => {
    e.preventDefault()
    const currentPassword = e.target.elements['currentPassword'].value
    const newPassword = e.target.elements['newPassword'].value
    const confirmPassword = e.target.elements['confirmPassword'].value
    if(newPassword!==confirmPassword){
      setErrPassword(true)
    }else{
      setErrPassword(false)
    }
  }
  return(
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-3'><Sidebar /></div>
          <div className='col-12 col-md-9 bg-white'>
            <h1 className='fs-6'>Change Password</h1>
            <p style={{maxWidth: '350px'}}>You must enter your current password and then type your new password twice.</p>
            <Form onSubmit={changePassword}>
              <FormInput name='currentPassword' type='password' variant='border-0 border-bottom' icon={<FiLock />} placeholder='Current Password'/>
              <FormInput name='newPassword' type='password' variant='border-0 border-bottom' icon={<FiLock />} placeholder='New Password'/>
              <FormInput name='confirmPassword' type='password' variant='border-0 border-bottom' icon={<FiLock />} placeholder='Repeat New Password'/>
              <p className={`text-danger ${errPassword ? 'd-block' : 'd-none'}`}>Password not match</p>
              <Button>Change Password</Button>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ChangePassword