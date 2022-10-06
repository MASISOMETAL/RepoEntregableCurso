import { database } from "../../components/database";
import { ofertaTypes } from "../types";

const {SELECT_OFERTA} = ofertaTypes;

const initialState = {
    database : database,
    selected: null
 }
 
 const DatabaseReducer = (state = initialState, action) =>{
    switch (action.type) {
      case SELECT_OFERTA:
         /*const searchindex = state.database.findIndex(
            (item) => item.id === action.id)
         return {
            ...state,
            selected: state.database[searchindex]
        }*/
        return {
         ...state,
         selected: "hola"}
      default:
         return state
    }

 }

 export default DatabaseReducer;