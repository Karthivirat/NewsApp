export const  FETCH_ARTICLES ='FETCH_ARTICLES';
export const  TOGGLE_FAVORITES ='TOGGLE_FAVORITES';

export const fetchArticles = () => {
    return async dispatch => { 

        // logic to fetch data
        const result = await fetch('http://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=460c6731f9f34ebe9308f6785e241436');

        const resultData = await result.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData  
      });

    }
}

export const  toggleFavorites = url => {
    return{
        type: TOGGLE_FAVORITES,
        payload: url
    }

} 
