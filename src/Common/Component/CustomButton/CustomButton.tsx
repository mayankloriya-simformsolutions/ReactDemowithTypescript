import React from 'react'
import { CustomButtonStyle } from './CustomButton.styles'

export default function CustomButton(props:any) {
  const { children,   ...others } = props;
  return (
   <CustomButtonStyle  {...others}>{children}</CustomButtonStyle> 
  )
}
