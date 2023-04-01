
type PageBannerProps={
    heading:string;
    subHeading:string;
}

const PageBanner=(props: PageBannerProps)=>
{
    return(
        <>
        <section className="page-title bg-1">
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">{props.heading}</span>
          <h1 className="text-capitalize mb-5 text-lg">{props.subHeading}</h1>

          
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default PageBanner;