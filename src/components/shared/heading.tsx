import React from "react"

type Heading ={
    title: string
}

const Heading = (Props: Heading) =>  <h2 className="title-color" dangerouslySetInnerHTML={{__html: Props.title}}></h2>

    
export default Heading;