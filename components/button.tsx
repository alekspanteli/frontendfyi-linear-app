import Link from "next/link";
import { cva, VariantProps } from "cva";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva("rounded-full", {
  variants: {
    variant: {
      primary: ["bg-primary-gradient"],
      secondary: [""],
      tertiary: [""],
    },
    size: {
      small: ["text-xs px-3"],
      medium: ["text-sm px-4"],
      large: ["text-md px-6"],
    },
  },
  // compoundVariants: [
  //   {
  //     intent: "primary",
  //     size: "medium",
  //     class: "uppercase",
  //     // **or** if you're a React.js user, `className` may feel more consistent:
  //     // className: "uppercase"
  //   },
  // ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Button = ({ children, href, variant, size }: ButtonProps) => (
  <Link className={buttonClasses({ variant, size })} href={href}>
    {children}
  </Link>
);
