import React, { useEffect, useRef } from "react";
import SvgGauge from "svg-gauge";

const defaultOptions = {
    animDuration: 1,
    showValue: true,
    initialValue: 0,
    max: 100,
};

const Gauge = (props) => {
    const gaugeEl = useRef(null);
    const gaugeRef = useRef(null);

    useEffect(() => {
        if (!gaugeRef.current) {
            const options = {...defaultOptions, ...props};
            console.log(gaugeEl.current);
            gaugeRef.current = SvgGauge(gaugeEl.current, options);
            gaugeRef.current.setValue(options.initialValue);            
        }
        gaugeRef.current.setValueAnimated(Number(props.value), 1);
    }, [props]);

    return (
        <div className="gauge-div">
            <div className="gauge-name">{props.name}</div>
            <div ref={gaugeEl} className="gauge-container" />;
        </div>
    )
};

export default Gauge;