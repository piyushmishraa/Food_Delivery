import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header"
import appStore from "../../utils/appStore";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

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

test("should test login logout button",()=>{

    render(
        <Auth0Provider>

       
        <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
        </BrowserRouter>
        </Auth0Provider>
    );

    const loggin= screen.getByRole("button",{name:'Log in'});
    fireEvent.click(loggin);
    expect(loggin).toBeInTheDocument();
   

})