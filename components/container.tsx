import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        "w-[min(100vw-30px,1200px)] [margin-inline:auto]",
        className
      )}
    >
      {children}
    </div>
  );
};
