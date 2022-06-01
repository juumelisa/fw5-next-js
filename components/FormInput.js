const FormInput = ({id, value, type, name, icon, placeholder, variant, required, onChange}) => {
  return(
    <div className='position-relative mb-4'>
    <input id={id} type={type} name={name} value={value} placeholder={placeholder} className={`${variant}`} required={required ? 'required' : ''} style={{width: '100%', outline: 'none'}} onChange={onChange}/>
    <p className='position-absolute top-50 start-0 translate-middle-y m-0'>{icon}</p>
    </div>
  )
}

export default FormInput