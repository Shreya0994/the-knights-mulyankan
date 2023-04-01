type Heading = {
  title: string;
  className?: string;
};

const Heading = (props: Heading) => (
  <h2
    className={props.className}
    dangerouslySetInnerHTML={{ __html: props.title }}
  ></h2>
);

export default Heading;
