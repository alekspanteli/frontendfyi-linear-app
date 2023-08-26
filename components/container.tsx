import { twMerge } from "tailwind-merge";

export const Container = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "w-[min(100%-var(--gutter),1200px)] [margin-inline:auto]",
        className
      )}


                               {...props}
    >
      {children}
    </div>
  );
};
