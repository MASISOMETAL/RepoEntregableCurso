import { PromosDB } from "../../components/promosDB";
import { ofertaTypes } from "../types";

const {SELECT_OFERTA} = ofertaTypes;

const initialState = {
    promosDB : PromosDB,
    selected: null
 }
 
 const PromosReducer = (state = initialState, action) =>{
    switch (action.type) {
      case SELECT_OFERTA:
        const finder = state.promosDB.find((state) => state.id === action.selected)
        return {
         ...state,
         selected: finder,
      }
      default:
         return state
    }

 }

 export default PromosReducer;