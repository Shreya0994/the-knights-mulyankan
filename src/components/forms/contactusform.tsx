import { ContactUsForm } from '@/library/types'
import { useState } from 'react'
import Divider from '../shared/divider'
import Heading from '../shared/heading'
import Description from '../shared/description'

const ContactUsForm = (props: ContactUsForm) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: any) => {
    console.log(e.target.name)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    alert('Message is Successfully Sent \nThank You ' + name)
    e.currentTarget.reset()
  }

  return (
    <section className="contact-form-wrap section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <Heading className="text-md mb-2" title={props.title} />
              <Divider />
              <Description description={props.description} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <form
              id="contact-form"
              className="contact__form "
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      required
                      className="form-control"
                      onChange={handleChange}
                      placeholder={props.nameField}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      required
                      className="form-control"
                      onChange={handleChange}
                      placeholder={props.emailField}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      required
                      className="form-control"
                      onChange={handleChange}
                      placeholder={props.subjectField}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      name="phone"
                      id="phone"
                      type="text"
                      required
                      className="form-control"
                      onChange={handleChange}
                      placeholder={props.phoneField}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group-2 mb-4">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  required
                  // rows="8"
                  onChange={handleChange}
                  placeholder={props.messageField}
                ></textarea>
              </div>

              <div className="text-center">
                <input
                  className="btn btn-main btn-round-full"
                  name="submit"
                  type="submit"
                  value={props.submitButton}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactUsForm
