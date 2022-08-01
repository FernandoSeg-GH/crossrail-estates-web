import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content grid3 mtop mobile'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 1361px) {
          .mobile {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;
            margin-top: 30px;
            width: 100%;
          }

          .box {
            width: 400px;
          }
          
          .overlay {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%!important;
            height: 100%!important;
            padding: 0px;
            margin: 0;
            
          }
        }
        @media (max-width: 370px) {
          .mobile {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;
            margin-top: 30px;
            width: 100%;
          }

        }
      `}</style>
    </>
  )
}

export default Location
