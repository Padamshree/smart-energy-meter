import React, { useEffect, useState } from 'react';
// import {
// BrowserRouter as Router,
// Switch,
// Route,
// Link
// } from 'react-router-dom';

// import Login from './components/Login';
// import User from './components/User';

import Gauge from './components/Gauge';
import UnitMeter from './components/UnitMeter';
import firebase from './firebase';

function App() {
    const [user, setUser] = useState(0);

    useEffect(() => {
        async function call_DB () {
            const readingRef = await firebase.database().ref("Readings");
            readingRef.on("value", (snapshot) => {
                const valArr = snapshot.val();
                const customer = valArr["Paddy"];
                setUser(customer);
            });
        }
        call_DB();
    }, []);

    return (
        <div>
            <Gauge name={"Power"} value ={user.Power} />
            <Gauge name={"Current"} value={user.Current} />
            <Gauge name={"Voltage"} value={user.Voltage} />
            <UnitMeter name={"Units Consumed"} value={user.Units} />
        </div>
    );
}

export default App;