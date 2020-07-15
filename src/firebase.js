import * as firebase from 'firebase'
import fbconfig from './fbconfig.js';

function init() {
    try {
        if(!firebase.apps.length) {
            firebase.initializeApp(fbconfig);
            firebase.analytics();
    
            console.log('firebase init');
        }
        else {
            console.log(firebase.apps)
        }
    }
    catch (err) {
        console.error('failed to init firebase')
        console.error(err);
    }
}

init();

export default firebase;