import _ from 'lodash';
import utils from 'utils';
import apimap from './apimap';

const Ajax = {
    send(data){
        data.apimap = apimap;
        return utils.Ajax(data);
    },

    login(data){
        return this.send({
            data: data,
            api: 'login'
        })
    }
}

export default Ajax;