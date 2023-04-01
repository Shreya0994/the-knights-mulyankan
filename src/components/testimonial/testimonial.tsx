const Testimonial = ({
  title,
  text,
  name,
  image,
}: {
  title: string
  text: string
  name: string
  image: string
}) => {
  return (
    <div className="testimonial-block style-2  gray-bg">
      <i className="icofont-quote-right"></i>

      <div className="testimonial-thumb">
        <img src={image} alt="" className="img-fluid" />
      </div>

      <div className="client-info ">
        <h4>{title}</h4>
        <span>{name}</span>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default Testimonial
