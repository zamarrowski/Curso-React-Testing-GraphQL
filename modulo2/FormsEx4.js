import React from 'react'

export default props => {

  let texto = ''
  let points = 0

  if (!props.password) {
    texto = 'no hay contraseña'
  }

  if (props.password.length >= 8) points++
  if (/[0-9]/.test(props.password)) points++
  if (/[A-Z]/.test(props.password)) points++
  if (/[$%&/()+-]/.test(props.password)) points++

  if (points === 0 && props.password) texto = 'contraseña muy debil'
  if (points === 1) texto = 'contraseña débil'
  if (points > 1 && points <= 3) texto = 'contraseña media'
  if (points >= 4) texto = 'contraseña fuerte'

  return (
    <p>{texto}</p>
  )
}