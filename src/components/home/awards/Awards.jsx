import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./awards.css"

const Awards = () => {
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />

          <div className='content grid4 mto mobile'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile {
            display: flex;
            overflow-x: scroll;
            margin: 0;
            margin-top: 30px;
            width: 100%;
            padding: 0;
          }
          .box {
            align-items: center;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default Awards
