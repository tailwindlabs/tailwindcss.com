import { FC } from 'react';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  id: string;
  children: string;
};

export const Heading: FC<HeadingProps> = ({ level, id, children, ...props }) => {
  const Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = `h${level}`;
  
  return (
    <Tag id={id} {...props}>
      <a href={`#${id}`} className="anchor">
        {children}
      </a>
    </Tag>
  );
};