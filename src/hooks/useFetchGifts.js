





























import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";
import PropTypes from 'prop-types'

export const useFetchGifts = (category) => {
  const [Images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []);
  return {
    Images,
    isLoading
  };
};


useFetchGifts.propTypes = {
  useFetchGifts: PropTypes.string.isRequired
}