import React from "react";
import '../../../App.css';
import header2 from '../../../assects/header2.svg';
import hero from '../../../assects/hero.png';

function Banner() {
    return (
        <div className="aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--6  demo-Grid baneer">
            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn brand-box">
                <h1>Women’s Outerwear</h1>
                <img src={header2} alt="here is blue bar" />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn brand-image">
                <img src={hero} alt="here is hero image" />
            </div>
        </div>
    );
}
export default Banner;