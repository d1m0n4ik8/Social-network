export const requaired = (value) => {
   return value ? undefined : 'input is required'
}
export const maxLengthCreator = (maxLength) => (value) => {
   return value && value.length < maxLength ? undefined : `max length is ${maxLength}`
}
