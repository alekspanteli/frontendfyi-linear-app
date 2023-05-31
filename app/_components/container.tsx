export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto w-[min(100vw-30px,1200px)]">{children}</div>;
};
