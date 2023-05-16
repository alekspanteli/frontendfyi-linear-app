interface HeroPros {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return <h1 className="text-5xl/none my-5">{children}</h1>;
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return <p className="text-lg/[1.3]">{children}</p>;
};

export const Hero = ({ children }: HeroPros) => {
  return <div className="text-center">{children}</div>;
};
