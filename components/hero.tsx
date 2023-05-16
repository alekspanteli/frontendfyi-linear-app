interface HeroPros {
    title: string;
    subtitle: string;
}

export const Hero = ({title, subtitle} : HeroPros) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
  };
  