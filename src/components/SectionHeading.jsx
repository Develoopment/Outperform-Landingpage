import React from 'react'

const SectionHeading = ({children, className}) => {
  return (
    <h1 className={`${className ? className : ""} font-light xl:font-normal text-[42px] xl:text-[48px] text-center`}>{children}</h1>
  )
}

export default SectionHeading