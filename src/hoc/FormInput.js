import s from './../common/Validation/ValidationForm.module.css'
export const FormInput = (Component) => {
   const FormComponent = ({ input, meta, className, ...props }) => {
      return (
         <div>
            <Component {...input} {...props} className={`${className} ${meta.touched && meta.error && s.field}`} />
            <div>{meta.touched ? <span className={s.errorMessage}>{meta.error}</span> : undefined}</div>
         </div>
      )
   }
   return FormComponent
}
