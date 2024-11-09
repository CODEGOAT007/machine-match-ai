import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
}

export function Button({ children, variant, size, className = '', ...props }: ButtonProps) {
  const baseStyles = "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center"
  
  const variants = {
    primary: "bg-sky-500/90 hover:bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 backdrop-blur-sm",
    secondary: "bg-gray-800/80 hover:bg-gray-800 text-gray-100 border border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base"
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 