import React from 'react'
import { CustomSelectStyle } from './CustomSelect.styles'

export default function CustomSelect(props: any) {
    const {children, ...cardprop} = props
  return (
    <CustomSelectStyle {...cardprop} />
  )
}
