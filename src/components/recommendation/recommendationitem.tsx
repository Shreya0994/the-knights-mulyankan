const RecommendationItem = ({
  title,
  text,
  name,
  key,
}: {
  title: string
  text: string
  name: string
  key: number
}) => {
  return (
    <div key={key} className="testimonial-block">
      <div className="client-info ">
        <h4>{title}</h4>
        <span>{name}</span>
      </div>
      <p>{text}</p>
      <i className="icofont-quote-right"></i>
    </div>
  )
}
export default RecommendationItem
