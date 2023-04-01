import RecommendationItem from './recommendationitem'
import { TestimonialListProps } from '@/library/types'
const Recommendations = ({
  title,
  items,
}: {
  title: string
  items: TestimonialListProps[]
}) => {
  return (
    <section className="section testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="section-title">
              <h2 className="mb-4">{title}</h2>
              <div className="divider  my-4"></div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 testimonial-wrap offset-lg-6">
            {items.filter((Testimoniallist,index) => index < 2).map((Testimoniallist, index) => {
              console.log(Testimoniallist)
              return <RecommendationItem {...Testimoniallist} key={index} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Recommendations
