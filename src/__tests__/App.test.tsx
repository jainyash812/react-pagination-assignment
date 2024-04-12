//@ts-nocheck
// working test case for mocking thunk
import { RootState } from '../store/store';
import { fetchContent } from '../features/user/userSlice';
import { render,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

describe('testing thunk action dispatching', () => {

  describe("mocking thunk dispatch function",()=>{
     it("should check dispatch",async()=>{
        const dispatch = jest.fn();
        const state:RootState = {
          users:{
            userData:[
              {first_name:'Mathew',last_name:"Hayden",avatar:"",id:1, email:""}
            ],
            isLoading:false,
            currentPage:1,
            totalPages:2
          }
        }
        
        const thunk = fetchContent(1);
        await thunk(dispatch,()=>state,undefined);
        const {calls} = dispatch.mock
        expect(calls[0][0].type).toEqual('user/fetchContent/pending')
        expect(calls[1][0].type).toBe('user/fetchContent/fulfilled')


     })
  })

})

const mockStore =  configureStore([thunk])

describe("render check <App/>",()=>{

   
   it("App rendering with no data",()=>{
    let store = mockStore({
      users:{
        userData:[],
        isLoading:false
      }
    })
      const  {getByTestId} = render(<Provider store={store}><App/></Provider>)
      expect(screen.getByText('No Data Available')).toBeInTheDocument();
      const appcomponent = getByTestId('user-cards-container-component');
      expect(appcomponent.childNodes.length).toBe(0);
   })

   it("App rendering with 6 user cards",async()=>{
    let store = mockStore({
      users:{
        userData:[
          {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
          },
          {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
          },
          {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
          },
          {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
          },
          {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
          },
          {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
          }
        ],
        isLoading:false
      }
    })
    const {getByTestId} = render(<Provider store={store}><App/></Provider>)
    const appcomponent = getByTestId('user-cards-container-component');
    expect(appcomponent.childNodes.length).toBe(6);

   })
   
})







