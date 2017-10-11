import _ from 'lodash';
const link = "http://10.12.12.11";

const api = {
    login: '/api/login.do'
}

for( let value in api){
    api[value] = link + api[value];
}

export default api;