interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <h1 className="[text-wrap:balance] mx-auto my-6 max-w-[18ch] text-5xl/none">
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return (
    <p className="[text-wrap:balance] mx-auto mb-12 max-w-[70ch] text-lg/[1.3]">
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
