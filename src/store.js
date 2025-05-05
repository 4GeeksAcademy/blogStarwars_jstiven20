export const initialStore = () => {
  return {
    people: [],
    vehicles: [],
    planets: [],
    people_details: {},
    vehicles_details: {},
    planets_details: {},
    favorites: [],
    loading: false,
    error: null
  };
};

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_data': //guarda los datos de people, vehivles, o planets
      return{
        ...store,
        [action.payload.key]: action.payload.data,
        loading: false
      };

      case 'set_loading': //para manejar estados de carga
      return{
        ...store,
        loading: true
      };
      
      case 'set_error': // para manejar errores de red
      return{
        ...store,
        error: action.payload.error,
        loading: false
      };

      case 'toggle_favorite': //agrega o elimina una entidad del array de favoritos
        const exist = store.favorites.some(
          fav => fav.uid === action.payload.uid && fav.tyupe === action.payload.type
        );
      return{
        ...store,
        favorites: exists
          ? store.favorites.filter(fav => !(fav.uid === action.payload.uid && fav.type === action.payload.type))
          : [...store.favorites, action.payload]
      };
    
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }    
}
