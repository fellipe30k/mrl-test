import { Controller } from 'stimulus';
export default class extends Controller {
    connect() {
        console.log('?');
        var bla = 'blabla'
        if (bla == 'blabla'){
            return true
        }
    }
}