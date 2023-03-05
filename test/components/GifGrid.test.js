



































import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";
 
jest.mock('../../src/hooks/useFetchGifts')

describe('Test del GifGrid', () => {
    const categoria = 'One Punch'
    test('Debe de mostrar el loading inicialmente ', () => {
        useFetchGifts.mockReturnValue({
            Images: [],
            isLoading: true
        })
        
        render(<GifGrid category={categoria}/>)
        expect(screen.getByText('Cargando...')).toBeTruthy();
    });
    test('Debe de mostrar items cuando se cargan las imagenes', () => {
        const gifs = [
            {
                id: 'HGFTGF',
                title: 'dfdsfdsf',
                url: 'dfsdfdsf'
            },
            {
                id: 'HGF76GF',
                title: 'dfd876sfdsf',
                url: 'dfsd6fdsf' 
            },
            {
                id: 'HGFT6GF',
                title: 'dfdsfdsf',
                url: 'dfsdfdsf'
            },
            {
                id: 'HGF767GF',
                title: 'dfd876sfdsf',
                url: 'dfsd6fdsf' 
            }
        ]
        useFetchGifts.mockReturnValue({
            Images: gifs,
            isLoading: false
        })
        render(<GifGrid category={categoria}/>)
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });
});









