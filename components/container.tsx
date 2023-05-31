export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-[min(100vw_-_30px,_1200px)]">
      {children}
    </div>
  );
};
