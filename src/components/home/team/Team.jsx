import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mtop grid3 mobile'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex mobile-buttons'>
                    <button>
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 1360px) {
          .mobile {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
          }
        }
        @media (max-width: 500px) {
          .mobile-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0;
          }
          .mobile-buttons > button {
            width: 100%;
          }
          .mobile-buttons > button:nth-child(2) {
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  )
}

export default Team
