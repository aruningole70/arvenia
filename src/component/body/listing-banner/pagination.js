// import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import '../../../App.css';
import left from '../../../assects/left.svg';
import right from '../../../assects/right.svg';

const Pgination = ({ showperpage, onPaginationChange, total }) => {

    const [counter, steCounter] = useState(1);

    useEffect(() => {
        const value = showperpage * counter;
        // console.log("start value :" ,value-showperpage);
        // console.log("end value :" ,value+showperpage);
        onPaginationChange(value - showperpage, value)
    }, [counter])
    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                steCounter(1);
            } else {
                steCounter(counter - 1)
            }
        } else if (type === "next") {
            if (Math.ceil(total / showperpage) === counter) {
                steCounter(counter);
            } else {
                steCounter(counter + 1);
            }
        }
    }

    return (
        <div className="paginate">
            <ul>
                <li><button onClick={() => onButtonClick("prev")}>(<img src={left} alt="" />)</button></li>
                <li><span>1</span></li>
                <li><span>2</span></li>
                <li><span>3</span></li>
                <li><span>4</span></li>
                <li><button onClick={() => onButtonClick("next")}>(<img src={right} alt="" />)</button></li>
            </ul>
        </div>
    );
}
export default Pgination;