import React from 'react'

type Props = {
  text: string
  textSize?: '2xl' | '4xl'
  textColor?: 'white' | 'black'
  bgColor?: 'white' | 'black' | 'transparent'
  borderColor?: 'white' | 'black'
  shadow?: 'flat' | 'flat-sm' | 'flat-xs'
  className?: string
}

export const Button: React.FC<Props> = ({
  text,
  textSize = '2xl',
  textColor = 'black',
  bgColor = 'white',
  borderColor = 'black',
  shadow = 'flat',
  className = '',
}) => {
  const commonStyle = 'btn rounded-full border-2 hover:bg-opacity-50'
  return (
    <button
      className={`${commonStyle} text-${textSize} text-${textColor} shadow-${shadow} border-${borderColor} bg-${bgColor} ${className}`}
    >
      {text}
    </button>
  )
}
