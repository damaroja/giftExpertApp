


















/* 
export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vp2GmjjiBzDI1mxAeSapigkPCbNMcnCF&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    return gifts;
  }; */

import { getGifts } from "../../src/helpers/getGifts";

  describe('Test de la function getGifts', () => {
    test('Retorna un arreglo de gifts', async() => {
        const gifts = await getGifts('One Punch')
        expect(gifts.length).toBeGreaterThan(0);
        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
  });






