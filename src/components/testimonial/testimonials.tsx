import Testimonial from './testimonial'
import { Testimoniallists } from './data'
const Testimonials = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <section className="section testimonial-2 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <div className="divider mx-auto my-4"></div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 testimonial-wrap-2">
            {Testimoniallists.map((Testimoniallist) => {
              console.log(Testimoniallist)
              return (
                <Testimonial {...Testimoniallist} key={Testimoniallist.id} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Testimonials