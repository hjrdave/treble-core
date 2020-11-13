import {createStore} from 'treble-gsm';

const TrebleCoreStore = createStore([
    {
        action: 'updateTrebleCoreData',
        state: {
            trebleCoreData: {
                subscribeAPI: null,
                moduleData: null
            }
        }
    }
]);

export default TrebleCoreStore