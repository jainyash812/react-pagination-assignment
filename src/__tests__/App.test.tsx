// working test case for mocking thunk
import { RootState } from '../store/store';
import { fetchContent } from '../features/user/userSlice';

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








