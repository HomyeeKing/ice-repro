
import { createModel } from 'ice';


export default createModel({
  state: {
      name:'foo'
  } ,
  reducers: {
    setName(state,name){
      state.name = name
    }
  },
 
});
