import { ContactUsForm } from '@/library/types'
import React, { useEffect, useRef, useState } from 'react'
import Divider from '../shared/divider'
import Heading from '../shared/heading'
import Description from '../shared/description'

const ContactForm = ({ success }: { success: () => void }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = {
      full_name: inputRef.current?.value,
      email: event.target.email.value,
      topic: event.target.topic.value,
      phone_number: event.target.phone_number.value,
      message: event.target.message.value
    }
    const JSONdata = JSON.stringify(data)
    console.log(`JSONData' ${JSONdata}`)
    const endpoint = 'https://sample-apis.azurewebsites.net/api/open/contact-us'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSONdata
    }
    const response = await fetch(endpoint, options)
    console.log(`Response' ${response}`)
    if (response.status === 201) {
      success();
    }
  }
  return (
    <>
      <form id="contact-form" className="contact__form " onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input name="full_name" id="full_name" type="text" ref={inputRef} className="form-control" placeholder="Your Full Name" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <input name="email" id="email" type="email" className="form-control" placeholder="Your Email Address" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input name="topic" id="topic" type="text" className="form-control" placeholder="Your Query Topic" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input name="phone_number" id="phone_number" type="text" className="form-control" placeholder="Your Phone Number" />
            </div>
          </div>
        </div>

        <div className="form-group-2 mb-4">
          <textarea name="message" id="message" className="form-control" placeholder="Your Message"></textarea>
        </div>

        <div className="text-center">
          <input className="btn btn-main btn-round-full" name="submit" type="submit" value="Send Messege"></input>
        </div>
      </form>
    </>
  )
}

const ContactUsForm = (props: ContactUsForm) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <>
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
          <div className="row justify-content-center">
            {
              !formSubmitted &&
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ContactForm success={() => { setFormSubmitted(true) }} />
              </div>
            }
            {
              formSubmitted &&
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-success contact__msg" role="alert">
                    Your message was sent successfully.
                  </div>
                </div>
              </div>
            }

          </div>
        </div>
      </section>
    </>
  )

}
export default ContactUsForm
