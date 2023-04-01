import Link from 'next/link';

type BannerProps = {
    title: string,
    heading : string,
    description : string,
    ctaText: string,
    ctaLink: string,
    bgImg: string
}

const Banner = (props: BannerProps) => {
    return (
        <>
            <section className="banner" style={{backgroundImage:`url(${props.bgImg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xl-7">
                            <div className="block">
                                <div className="divider mb-3"></div>
                                <span className="text-uppercase text-sm letter-spacing ">{props.title}</span>
                                <h1 className="mb-3 mt-3">{props.heading}</h1>

                                <p className="mb-4 pr-5">{props.description}</p>
                                <div className="btn-container ">
                                    <Link href={props.ctaLink} target="_blank" className="btn btn-main-2 btn-icon btn-round-full">{props.ctaText} <i className="icofont-simple-right ml-2  "></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner