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
        "mx-auto w-[min(100vw-30px,1200px)]",
        className
      )}
    >
      {children}
    </div>
  );
};
