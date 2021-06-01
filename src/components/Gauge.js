import React, { useEffect, useRef } from "react";
import SvgGauge from "svg-gauge";

const Gauge = (props) => {
    const gaugeEl = useRef(null);
    const gaugeRef = useRef(null);

    useEffect(() => {
        if (!gaugeRef.current) {
            const gaugeOptions = props.options;
            const options = {...gaugeOptions.options, ...props};
            gaugeRef.current = SvgGauge(gaugeEl.current, options);
            gaugeRef.current.setValue(options.initialValue);            
        }
        gaugeRef.current.setValueAnimated(Number(props.value), 1);
    }, [props]);

    return (
        <div className="gauge-div">
            <div ref={gaugeEl} className="gauge-container">
                <span className="label">{props.options.label}</span>
                <span className="value-text">{props.options.valueText}</span>
            </div>
        </div>
    )
};

export default Gauge;