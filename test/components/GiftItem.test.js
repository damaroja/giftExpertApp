











/* export const GiftItem = ({title, url}) => {
    return (
      <>
      <div className="card">
            <p>{title}</p>
            <p><img src={url} /></p>
            </div>
      </>
    )
  }
  
  
  GiftItem.Proptypes = {
    title: Proptypes.string.isRequired,
    url  : Proptypes.string.isRequired
  } */

import { GiftItem } from "../../src/components/GiftItem";
import { render, screen } from "@testing-library/react";

describe("Test del <GiftItem />", () => {
  const titulo = "ESte es el titulo";
  const address = "https://media0.giphy.com/media/jhkgdsf7683gfd763";
  test("Test del snapshot ", () => {
    const { container } = render(<GiftItem title={titulo} url={address} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe de mostrar la imagen con el alt y el URL indicado", () => {
    render(<GiftItem title={titulo} url={address} />);
    const { src, alt } = screen.getByRole("img");
    expect(alt).toBe(titulo);
    expect(src).toBe(address);
});
test('Test para mostrar el titulo del componente', () => {
    render(<GiftItem title={titulo} url={address} />);
    expect(screen.getByText(titulo)).toBeTruthy();
  });
});
