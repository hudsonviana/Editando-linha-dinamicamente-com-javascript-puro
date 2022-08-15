import http from '../http';

async function getUsers() {
    try {
        const { data } = await http.get('/list');
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getUsers;
