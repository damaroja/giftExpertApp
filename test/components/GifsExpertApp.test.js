


















import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../../src/components/GifExpertApp";


describe('Test en GifExpertApp', () => {
    const inputValue = 'Hola'
    test('Test del titulo de GifExpertApp', () => {
        render(<GifExpertApp />)
        expect(screen.getByText('GifExpertApp2')).toBeTruthy();      
    });
    test('Test para ver si se llama a la funcion onAddCategory', () => {
        render(<GifExpertApp />)
    });
    test('Test de renderizacion de las imagenes', () => {
        render(<GifExpertApp />)
        
    });
    test('Debe llamar a una categoria exixtente', () => {
        const {container} = render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)
        fireEvent.input(input, {target: {value: inputValue + '2'}})
        fireEvent.submit(form)
        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
        
    });
    test('No debe llamar a una categoria no exixtente', () => {
        const {container} = render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        
        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)
        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)
        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);      
    });
});