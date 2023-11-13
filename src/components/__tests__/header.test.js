import { render,screen } from "@testing-library/react";
import Header from "../Header"
import appStore from "../../utils/appStore";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

test("should test if the header component is rendered or not",()=>{

   render(
    <BrowserRouter>
    <Provider store={appStore}>
       <Header/>
    </Provider>
    </BrowserRouter>
);
const loggin= screen.getByRole("button");
expect(loggin).toBeInTheDocument();
   

})