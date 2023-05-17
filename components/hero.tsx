interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <h1 className="m-inline-auto text-5xl/none m-block-[--space-6] max-inline-size-[17ch]">
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return <p className="text-lg/[1.3]">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
