import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputAuth = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[40px] w-full border border-black bg-background px-4 py-2 text-sm ring-offset-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-[0.3px] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
InputAuth.displayName = "Input"

export { InputAuth }