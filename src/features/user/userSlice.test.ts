//@ts-nocheck
import userReducer, {fetchContent} from './userSlice';



describe("user reducer", ()=>{
    it("should return initial state when passed an empty action",()=>{
        const initialState = undefined;
        const action = {type:""};
        const result = userReducer(initialState,action);
        console.log("result",result)
        expect(result).toEqual({userData:[],isLoading:false,currentPage:0,totalPages:1})
    })
    // it("should return initial state when passed an empty action",()=>{
    //     const initialState = undefined;
    //     const action = {type:""};
    //     const result = userReducer(initialState,action);
    //     expect(result).toEqual({userData:[],isLoading:false})
    // })
})
