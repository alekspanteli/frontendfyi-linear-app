export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-inline-auto inline-size-[min(100%_-_30px,_1200px)]">
      {children}
    </div>
  );
};
