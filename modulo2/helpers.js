export const getHobbies = (hobby, checked, hobbies) => {
  if (checked) {
    return [...hobbies, hobby]
  } else {
    return hobbies.filter(h => h !== hobby)
  }
}

//[{price: 500}, {price: 250}]
export const getPrice = products => {
  return products.reduce((prev, current) => prev + current.price, 0)
}