import React from 'react'
import Image from 'next/image'
import { useParams } from 'react-router-dom'
import { useRouter } from 'next/router'
import { Card } from '@/library/types'
import { NextPageWithLayout } from '@/library/types'
import Description from '../components/shared/description'
import Divider from '../components/shared/divider'
import Heading from '../components/shared/heading'

const DepartmentSingle: NextPageWithLayout<{
  departmentsingle: Card
}> = (props: { departmentsingle: Card }) => {
  // const { handle } = useParams()
  // const router = useRouter()
  // const { pid } = router.query
  // const [searchParams, setSearchParams] = useSearchParams()
  // searchParams.get('title')

  //console.log('hello', pid)
  return (
    <section className="section department-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="department-img">
              <Image
                src={props.departmentsingle.serviceimage}
                alt=""
                className="img-fluid"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="department-content mt-5">
              <Heading title={props.departmentsingle.title} className="md-4" />
              <Divider />
              <Description
                description={props.departmentsingle.description}
                className="lead"
              />
              <Description
                description={props.departmentsingle.longdescription}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  let res = await fetch('http://localhost:3000/api/departmentsingle')
  const departmentsingle = (await res.json()) as Card
  // Pass data to the page via props
  return {
    props: {
      departmentsingle: departmentsingle,
    },
  }
}

export default DepartmentSingle
