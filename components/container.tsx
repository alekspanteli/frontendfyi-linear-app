import classNames from "classnames";

export const Container = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<'div'>) => {
  return (
    <div
      className={classNames(
        "w-[min(100vw-30px,1200px)] [margin-inline:auto]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
