import { HtmlHTMLAttributes } from "react"

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <div className="bg-gradient-to-b inline-flex relative from-amber-200 to-yellow-800 p-1 z-10">
      <button {...props} className={`cursor-pointer text-lg uppercase ring-2 py-2 px-3 min-w-24 ring-[rg] bg-gradient-to-b from-cyan-600 to-cyan-800 text-yellow-200`}>
        {children}
      </button>
    </div>
  )
}