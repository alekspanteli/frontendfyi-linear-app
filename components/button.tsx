import Link from "next/link";
import { cva, VariantProps } from "cva";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva("", {
  variants: {
    variant: {
      primary: [""],
      secondary: [""],
      tertiary: [""],
    },
    size: {
      small: ["text-xs"],
      medium: ["text-sm"],
      large: ["text-md"],
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
  // defaultVariants: {
  //   intent: "primary",
  //   size: "medium",
  // },
});

export const Button = ({ children, href, variant, size }: ButtonProps) => (
  <Link className={buttonClasses({variant, size})} href={href}>
    {children}
  </Link>
);
