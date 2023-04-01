import { ContentBlockProps } from '@/library/types'
const ContentBlock = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) => {
  return (
    <section className="section about-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="title-color">{title}</h2>
          </div>
          <div className="col-lg-8">
            <p>{description}</p>
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContentBlock
