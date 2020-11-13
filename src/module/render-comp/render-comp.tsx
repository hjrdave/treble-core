import React from 'react';
import { useTreble } from 'treble-gsm';

export default function RenderComp() {

    const [{ trebleCoreData }, Store, Utils] = useTreble();


    React.useEffect(() => {
        //console.log(trebleCoreData);
        Store.update('updateTrebleCoreData', {
            ...trebleCoreData,
            subscribeAPI: Store,
            moduleData: Utils.moduleData
        })
    }, []);

    return null
}