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

      case "toggle_favorite": {
        const { uid, name, type } = action.payload;
        const exists = store.favorites.some((fav) => fav.uid === uid && fav.type === type);
      
        return {
          ...store,
          favorites: exists
            ? store.favorites.filter((fav) => !(fav.uid === uid && fav.type === type))
            : [...store.favorites, { uid, name, type }]
        };
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }    
}
