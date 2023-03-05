


/* 
export const AddCategory = ({onNewCategory}) => {
    const [InputValue, setInputValue] = useState('');
    
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };
  
    const onSubmit = (e) => {
        e.preventDefault();
        if(InputValue.trim().length <= 1) return
      onNewCategory(InputValue.trim())
      setInputValue('')
      
    };
    
    return (
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          value={InputValue}
          placeholder="Buscar Gifts"
          onChange={(e) => onInputChange(e)}
          />
          </form>
          );
        };
        */
       
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../src/components/AddCategory'

describe('Test en <AddCategory />', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: { value: "Hola"}})
        expect(input.value).toBe('Hola');
        fireEvent.input(input, {target: { value: "Adios"}})
        expect(input.value).not.toBe('Hola');
        fireEvent.input(input, {target: { value: ""}})
        expect(input.value).not.toBe('Hola');
        fireEvent.input(input, {target: { value: "Hola"}})
        expect(input.value).not.toBe('');
    });
    test('Debe de llamar a onNewCategory si el input tiene un valor ', () => {
        const inputValue = 'Hola'
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={ onNewCategory }/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: { value: inputValue}})
        fireEvent.submit(form)
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        expect(input.value).toBe('');
    });
    test('No debe de llamar al onNewCategory si el unput esta vacio', () => {
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={ onNewCategory }/>)
        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
               
    });

})
