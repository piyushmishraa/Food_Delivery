import { render,screen } from "@testing-library/react";
import Contact from "../Contact";

import '@testing-library/jest-dom';
test("to test wether the contact page is rendered or not ",()=>{
    render(<Contact/>);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("to test wether the button is rendered or not  ",()=>{
    render(<Contact/>);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})