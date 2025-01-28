import { FC } from "react"
import { cva } from "class-variance-authority";
import { cn } from "../utils"
import { ButtonProps } from "../types/type";


const buttonVariants = cva(
    "border-0 border-solid inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20 flex gap-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary-color text-white shadow hover:bg-primary-color/90 rounded-xl",
          outline:
            "border border-gray-100 bg-background shadow-sm hover:bg-gray-100/90 rounded-lg",
          link: "text-primary-color underline-offset-4 hover:underline text-base",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "w-[60px] h-[35px]",
          lg: "h-[44px] w-[250px]",
          icon: "h-10 w-10 rounded-full hover:bg-secondary-icon-color/80",
          custom:""
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )

const Button :FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} 
      />
  );
}


export { Button, buttonVariants }
