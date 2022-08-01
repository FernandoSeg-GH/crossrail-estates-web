import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <form className='flex column'>
            <Heading title='Search Your Next Home ' subtitle='Find new &amp; featured property located in your local city.' />

            <div className='search'>
              <div className='box'>
                <span>City/Street</span>
                <input type='text' placeholder='Location' />
              </div>
              <div className='box'>
                <span>Property Type</span>
                <input type='text' placeholder='Property Type' />
              </div>
              <div className='box'>
                <span>Price Range</span>
                <input type='text' placeholder='Price Range' />
              </div>
              {/* <div className='box custom-box'>
                <h4>Advance Filter</h4>
              </div> */}
              <button className='btn1'>
                <i className='fa fa-search'></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
        }
        .container form {
          background-color: rgba(0, 0, 0, 0.5);
          padding: 60px;
          margin: 0 auto;
        }
        .search {
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 90%;
          max-width: 900px;
        }
        .search input {
          background-color: #fff;
        }
        .custom-box {
          background-color: #fff;
        }
        .btn1 {
          margin-top: 30px!important;
        }
        @media (max-width: 768px) {
          .hero {
            height: auto;
            padding-bottom: 90px;
            
          }
          .search {
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .box {
            width: 80%;
            max-width: 300px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          }
          .box span {
            margin-bottom: 10px;
            align-self: flex-start;
            margin-left: 10px;
            color: rgba(255, 255, 255, 0.8);
          }
          .box input {
            max-width: 260px;
            margin: 0 auto; 
            width: 100%; 
          }
        }
      `}</style>
    </>
  )
}

export default Hero
