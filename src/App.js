import React, { useEffect, useState } from 'react';
import Gauge from './components/Gauge';
import HourChart from './components/HourChart';
import DayChart from './components/DayChart';

import gaugeOptions from './utils/gaugeDefaults';
import firebase from './firebase';
import './styles/app.css';

function App() {
    const [user, setUser] = useState(0);

    useEffect(() => {
		async function call_DB () {
			const readingRef = await firebase.database().ref("Readings");
			readingRef.on("value", (snapshot) => {
				const valArr = snapshot.val();
				const customer = valArr[Object.keys(valArr)[0]];
				setUser(customer);
			});
		}
		call_DB();
    },[]);

    return (
		
			<div id="Dashboard">
				<div className="wrapper">
					<Gauge
						name={"Voltage"} 
						value={user.voltage}
						options={gaugeOptions.voltage}
					/>
					<Gauge
						name={"Current"} 
						value={user.current}
						options={gaugeOptions.current}
					/>
					<Gauge
						name={"Power"} 
						value={user.power}
						options={gaugeOptions.power}
					/>
					<Gauge
						name={"Units"} 
						value={user.units}
						options={gaugeOptions.units}
					/>
				</div>
				<div className="chart">
					<HourChart 
						data={user.DayLog}
					/>
				</div>
				<div className="chart">
					<DayChart 
						data={user.MonthLog}
					/>
				</div>
			</div>
    );
}

export default App;