import { render,screen } from "@testing-library/react";
import Contact from "../Contact";

import '@testing-library/jest-dom';


test("to test wether the contact page is rendered or not ",()=>{
    render(<Contact />);
    const heading=screen.getByRole("heading");

    //Asertion 
    expect(heading).toBeInTheDocument();
    


})