export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mi-auto w-[min(100%_-_30px,_1200px)]">{children}</div>
  );
};
