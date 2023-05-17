export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:[inline-size:min(100%_-_30px,_1200px)] md:[margin-inline:auto]">{children}</div>
  );
};
