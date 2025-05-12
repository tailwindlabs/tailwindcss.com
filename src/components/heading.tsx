import { FC } from 'react';

type HeadingProps = {
  id: string;
  children: string;
};

const Heading: FC<HeadingProps & { level: 1 | 2 | 3 | 4 | 5 | 6 }> = ({ level, id, children, ...props }) => {
  const Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = `h${level}`;
  
  return (
    <Tag id={id} {...props}>
      <a href={`#${id}`} className="anchor">
        {children}
      </a>
    </Tag>
  );
};

export const H2: FC<HeadingProps> = (props) => <Heading level={2} {...props} />;
export const H3: FC<HeadingProps> = (props) => <Heading level={3} {...props} />;
export const H4: FC<HeadingProps> = (props) => <Heading level={4} {...props} />;
export const H5: FC<HeadingProps> = (props) => <Heading level={5} {...props} />;
export const H6: FC<HeadingProps> = (props) => <Heading level={6} {...props} />;