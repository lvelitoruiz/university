import axios from 'axios';

export const getApplications = async () => {

    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    let element: any;

    var config = {
        method: 'get',
        url: process.env.API_URL + '/api/applications?limit=100&page=1',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    await axios(config)
        .then(function (response) {
            console.log(response.data.data);
            element = response.data.data;
        })
        .catch(function (error) {
            console.log('****** this error: ', error);
        });

    return element;

}