type Description = {
  description: string;
  className?: string;
};

const Description = (props: Description) => (
  <p className={props.className}>{props.description}</p>
);

export default Description;
