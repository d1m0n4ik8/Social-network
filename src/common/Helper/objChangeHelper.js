export const objArrayChangeHelper = (items, userId, property, value) =>
   items.map((u) => {
      if (u.id === userId) {
         u[property] = value
         return u
      }
      return u
   })
