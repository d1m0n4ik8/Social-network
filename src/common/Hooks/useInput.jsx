import { useEffect } from 'react'
import { useState } from 'react'
const validateEmail = (email) => {
   return String(email)
      .toLowerCase()
      .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
}
const useInput = (initialValue, validations) => {
   let [value, setValue] = useState(initialValue)
   let [isDirty, setDirty] = useState(false)

   const valid = useValidation(value, validations)
   const onChange = (e) => {
      setValue(e.target.value)
   }
   const onBlur = (e) => {
      setDirty(true)
   }
   return {
      value,
      isDirty,
      onChange,
      onBlur,
      ...valid,
   }
}
const useValidation = (value, validations) => {
   let [isEmpty, setEmpty] = useState(true)
   let [minLengthError, setMinLengthError] = useState(false)
   let [emailError, setEmailError] = useState(false)
   let [error, setError] = useState('')
   let [inputValid, setInputValid] = useState(false)
   useEffect(() => {
      for (const validation in validations) {
         switch (validation) {
            case 'minLenght':
               value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
               break
            case 'isEmpty':
               value ? setEmpty(false) : setEmpty(true)
               break
            case 'isEmail':
               setEmailError(!validateEmail(value))
               break
            default:
               break
         }
      }
   }, [value, validations])
   useEffect(() => {
      if (isEmpty) {
         setError('Поле не може бути пустим')
      } else if (emailError) {
         setError('Некоректний емейл')
      } else if (minLengthError) {
         setError('Мінімальна довжина ' + validations.minLenght)
      } else {
         setError('')
      }

      if (isEmpty || minLengthError || emailError) {
         setInputValid(false)
      } else {
         setInputValid(true)
      }
   }, [isEmpty, minLengthError, emailError, validations])
   useEffect(() => {}, [])
   return {
      error,
      inputValid,
   }
}
export default useInput
