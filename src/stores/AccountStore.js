import {observable, action} from 'mobx';

export default class AccountStore {
    @observable id = '';
    @observable pw = '';
    @observable name = '';
    @observable isLogin = false;

    @action setId = (val) => {
        this.id=val;
    }
    @action setPw = (val) => {
        this.pw=val;
    }
    @action setName = (val) => {
        this.name=val;
    }
    @action setLogin = (val) => {
        this.isLogin=val;
    }
}