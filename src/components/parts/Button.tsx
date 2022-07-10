import React from 'react'

type Props = {
  text: string
  textSize: '2xl' | '4xl'
  shadowSize: 'sm' | 'md'
  padding: 'sm' | 'md'
  transparent?: boolean
  widthFull?: boolean
}

const textSizes = {
  '2xl': 'text-2xl',
  '4xl': 'text-4xl',
}

const shadowSizes = {
  sm: 'shadow-flat-sm',
  md: 'shadow-flat-md',
}

const paddings = {
  sm: 'px-6 py-2',
  md: 'px-12 py-5',
}

export const Button: React.FC<Props> = ({
  text,
  textSize,
  shadowSize,
  padding,
  transparent = false,
  widthFull = false,
}) => {
  return (
    <button
      className={`
      btn btn-circle font-normal h-fit hover:bg-opacity-50 border-2
      ${paddings[padding]} ${textSizes[textSize]} ${shadowSizes[shadowSize]}
      ${widthFull ? 'w-full' : 'w-fit'}
      ${
        transparent
          ? 'bg-transparent text-white border-white shadow-white'
          : `bg-white text-black border-black shadow-black
            dark:bg-light-slate dark:text-white dark:border-dark-slate dark:shadow-dark-slate`
      }
      `}
    >
      {text}
    </button>
  )
}
