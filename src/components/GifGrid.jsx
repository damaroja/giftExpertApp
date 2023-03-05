






















import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftItem } from "./GiftItem";
import PropTypes from 'prop-types'


export const GifGrid = ({ category }) => {
  
  const { Images, isLoading } = useFetchGifts(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {Images.map((image) => {
          return <GiftItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
