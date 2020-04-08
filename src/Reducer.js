import {LOGIN} from './actionType.js';
const intialState = {
  users : [
    { id: 1, name: "abi", password: "ab" ,email: "pankajapriya997@gmail.com" },
    { id: 2, name: "pank", password: "pan",email: "pan@gmail.com" },
    { id: 3, name: "frank", password: "fra",email: "fra@gmail.com"  },
    { id: 4, name: "rama", password: "ram" ,email: "ramgmail.com" },
    { id: 5, name: "shan", password: "sha" ,email: "sha@gmail.com" },
    { id: 6, name: "prak", password: "pra" ,email: "pra@gmail.com" },
    { id: 7, name: "nancy", password: "nan" ,email: "nan@gmail.com"  },
    { id: 8, name: "suji", password: "suj",email: "suj@gmail.com"  },
    { id: 9, name: "tresa", password: "tre" ,email: "tre@gmail.com" },
    { id: 10, name: "naomi", password: "nao",email: "nao@gmail.com"  }
  ]
}
const reducer=(state=intialState,action) =>
{
  switch(action.type)
  {
case LOGIN: return state
 default: return state
  }
} 
export default reducer;