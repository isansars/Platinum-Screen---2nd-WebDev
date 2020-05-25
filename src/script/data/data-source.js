class DataSource{

    static searchMovie(keyword, api){
        return fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(responseJson =>{
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })

        /*
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found`);
            }  
        }) */
    }
}

export default DataSource;