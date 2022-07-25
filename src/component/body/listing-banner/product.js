import { useEffect, useState } from "react";
import ListingBanner from "./listing-banner";

function Categories() {

  const [initialDataCat, setDataCat] = useState([]);

  const [sort, setSort] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setDataCat(data));
    setLoading(false);
  }, []);
  const onfilterChange = (filter) => {
    if (filter) {
      const result = initialDataCat.sort((a, b) => a.price - b.price);
      return setSort(result);
    }
    else {
      return setSort(sort);
    }
  }

  return <ListingBanner loading={loading} data={initialDataCat} filterChange={onfilterChange} />
}

export default Categories;
