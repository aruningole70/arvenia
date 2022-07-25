import React, { useState } from "react";
import '../../../App.css';
import Pgination from "./pagination";
import { useNavigate } from 'react-router-dom';
import heart from '../../../assects/heart.svg';
import arrowd from '../../../assects/arrowd.svg';
import arrowup from '../../../assects/arrowup.svg';
import sliders from '../../../assects/sliders.svg';
import MobSideBar from './mob-sidebr';


const ListingBanner = ({ filterChange, data, loading }) => {

    const [filter , setFilter] = useState (false);

    const showHidefilter = (e) =>{
        switch (e) {
            case "showHidefilter":
                setFilter(!filter);
        }
    }

    const onFilterSelect = (e) => {
        filterChange(e.target.value === "Sort by Price");
    }
    const navigate = useNavigate();

    const [showperpage] = useState(6)
    const [pagination, stePegination] = useState({
        start: 0,
        end: showperpage,
    })
    const onPaginationChange = (start, end) => {
        stePegination({ start: start, end: end })
    }

    const handleOnSubmit = (id) => {

        navigate('/product-detail/' + id);
    };
    return (
        <div>
             <div>
                { filter && <MobSideBar />}
            </div>
            <div className="aem-Grid aem-Grid--12 demo-Grid">
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--hide demo-GridColumn">
                    <p>20 Results</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6  aem-GridColumn--phone--hide demo-GridColumn drop-down">
                    <select name="" id="" onChange={onFilterSelect}>
                        <option value="Defoult"> Default</option>
                        <option value="Sort by Price">Sort by Price</option>
                    </select>
                </div>
                <div className="filter-result">
                    <ul>
                        <li>
                            <button onClick={() => showHidefilter("showHidefilter")}>
                                <img src={sliders} alt="give rating to product" />
                                Filter Results</button>
                        </li>
                        <li><a onClick={() => onFilterSelect()}>
                            <img src={arrowd} />
                            <img src={arrowup} />
                            Sort Products
                        </a>
                        </li>
                    </ul>
                    <li>38 Results</li>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12 demo-Grid">
                {loading ? (<h1 style={{ fontSize: "62px" }}>Loading...</h1>) :
                    <>
                        {data.slice(pagination.start, pagination.end).map((prod) => {
                            return (
                                <div onClick={() => handleOnSubmit(prod.id)} className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 demo-GridColumn banner-products" key={prod.id}>
                                    <img
                                        className="active"
                                        src={prod.image}
                                        alt=""
                                    />
                                    <p>{prod.title}</p>
                                    <span>${prod.price}/-</span>
                                    <br />
                                    <span><img src={heart} alt="save for leter" /></span>
                                </div>
                            );
                        })}
                    </>}
            </div>
            <div className="page-funtion">
                <Pgination showperpage={showperpage} onPaginationChange={onPaginationChange} />
            </div>
        </div>
    );
}
export default ListingBanner