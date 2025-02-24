
import axios from 'axios';


const baseUrl = "https://pixabay.com";
const endPoint = "/api";



export async function getImg (searchName, page, perPage) {
    const params = new URLSearchParams({
        key: '48827773-420cc6a3931f90379a2431d96',
        q: searchName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: perPage,
        page: page,
    });
  
    const url = baseUrl + endPoint + `?${params}`;
    const response = await axios.get(url);
    return response.data;

}

//total_pages = response.data.hits / per_page










//https://pixabay.com/api/?key=48827773-420cc6a3931f90379a2431d96&q=yellow+flowers&image_type=photo


/*{https://pixabay.com/api/
//*/
