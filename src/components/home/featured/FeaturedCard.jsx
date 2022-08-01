import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop mobile'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
      <style jsx>{`
          .mobile {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }

          .box {

          }
        }
      `}</style>
    </>
  )
}

export default FeaturedCard
