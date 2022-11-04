import axios from 'axios';


export const getCart = async () => {

    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    let element: any;

    var config = {
        method: 'get',
        url: 'https://accelered-api.whiz.pe/api/shopping-car/current',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    await axios(config)
        .then(function (response) {
            console.log(' this response: **** ', JSON.stringify(response.data));
            element = response.data;
        })
        .catch(function (error) {
            console.log('****** this error: ', error);
        });

    return element;

}

export const createCart = async (courses: any) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    let element: any;

    if(courses.length <= 1) {
        console.log('only one course');
        console.log('this courses: ',courses);
        var data = JSON.stringify({
            "courses": courses
        });
    } else {
        var data = JSON.stringify({
            "courses": courses
        });
    }

    var config = {
        method: 'post',
        url: 'https://accelered-api.whiz.pe/api/shopping-car',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const addCourseToCart = async (course: any) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    let element: any;

    var data = JSON.stringify(
        course
    );

    var config = {
        method: 'post',
        url: 'https://accelered-api.whiz.pe/api/shopping-car/add',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const deleteCourseCart = (id:any) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');

    var config = {
        method: 'delete',
        url: `https://accelered-api.whiz.pe/api/shopping-car/remove/${id}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getPaymentSession = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    let payElement;

    var config = {
        method: 'post',
        url: `https://accelered-api.whiz.pe/api/payment`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    await axios(config)
        .then(function (response) {
            payElement = response.data.data.url;
        })
        .catch( function (error) {
            console.log(error);
        })

        return payElement;
}