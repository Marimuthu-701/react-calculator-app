import React from 'react'

export default function Button({type = "button", className, label, ...props}) {
  return (
    <button type={type} className={`btn btn-default ${className}`} {...props}>{label}</button>
  )
}
