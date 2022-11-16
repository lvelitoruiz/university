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

export const getUsers = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    let element: any;

    var config = {
        method: 'get',
        url: process.env.API_URL + '/api/admin-group/groups/members',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    await axios(config)
        .then(function (response) {
            element = response.data.data;
        })
        .catch(function (error) {
            console.log('****** this error: ', error);
        });

    return element;
}

export const searchUsers = async (firstName: string,status: string) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    let element: any;

    let namestring: string;
    
    
    firstName !== "" ? namestring = `&keyword=${firstName}` : namestring = '';

    var config = {
        method: 'get',
        url: process.env.API_URL + `/api/admin-group/groups/members/?status=${status}${namestring}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    await axios(config)
        .then(function (response) {
            element = response.data.data;
        })
        .catch(function (error) {
            console.log('****** this error: ', error);
        });

    return element;
}