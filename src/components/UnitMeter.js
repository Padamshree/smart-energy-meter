import React from 'react';

const UnitMeter = props => {
    return (
        <div className="unit-meter">
            <div className="meter-heading">{props.name}</div>
            <div className="meter-value">{props.value}</div>
        </div>
    );
};

export default UnitMeter;