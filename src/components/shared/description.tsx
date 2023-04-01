import React from "react"
type Description ={
descr : string
}
const Description = (Props :Description) => <p className="mt-4 mb-5">{Props.descr}</p>
export default Description;