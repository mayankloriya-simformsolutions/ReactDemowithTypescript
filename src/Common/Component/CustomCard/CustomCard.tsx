import React from 'react'
import { CustomCardStyle } from './CustomCard.style'

export default function CustomCard(props:any) {
  const {children, ...cardprop} = props
  return (
    <CustomCardStyle {...cardprop}> 
      {children}
  </CustomCardStyle>
  )
}
