






















import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";


describe('Test del useFetchGifts', () => {
    test('Debe de regresar el estado inicial', () => {
        const {result} = renderHook( () => useFetchGifts('One Punch'))
        const { Images, isLoading } = result.current
        expect(Images.length).toBe(0);
        expect(isLoading).toBeTruthy();    
    });
    test('Debe de regresar un arreglo de imagenes y el isLoading en false', async() => {
        const {result} = renderHook( () => useFetchGifts('One Punch'))
        await waitFor(
            () => expect(result.current.Images.length).toBeGreaterThan(0)
        )
        const { Images, isLoading } = result.current
        expect(Images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();   
    });

});
