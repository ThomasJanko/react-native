import axios from 'axios';

const URL = 'https://hp-api.onrender.com/api/characters/students';

export default{
    
    getCharacters(){
       return axios.get('https://hp-api.onrender.com/api/characters/students')
        .then(res=>res)
        .catch(err=>console.log(err))
    },
    
    
}