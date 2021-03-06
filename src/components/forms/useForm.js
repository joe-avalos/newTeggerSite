import {useState, useEffect} from 'react'

const useForm = (callback, validate, initValues = {}) => {
  const [values, setValues] = useState(initValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors,callback,isSubmitting])
  
  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
    }
    setErrors(validate(values))
    setIsSubmitting(true)
  }
  
  const handleChange = e => {
    e.persist()
    if (e.target.type === 'checkbox') {
      setValues(v => ({
        ...v, [e.target.name]: e.target.checked
      }))
    }else {
        setValues(v => ({
          ...v, [e.target.name]: e.target.value
        }))
    }
  }
  
  return {
    handleChange,
    handleSubmit,
    errors,
    values
  }
}
export default useForm
