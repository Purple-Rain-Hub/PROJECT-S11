export const getSongs = () => {
    return async (dispatch) => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
        );
        if (response.ok) {
          const data = await response.json();
          dispatch({
            type: "GET_SONGS",
            payload: data.data,
          });
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.error("ERRORE", error);
        
      }
    };
  };