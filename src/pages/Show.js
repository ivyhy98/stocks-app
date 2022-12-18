import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Show({stocks}) {
    let { symbol } = useParams();
    const [stock, setStock] = useState(null);

    const getStock = ()=>{
        const found = stocks.find((st)=> st.symbol === symbol);
        setStock(found);
    }  
    useEffect(()=>{
        getStock();
    }, []);
    const loading = () =>{
        return(
            <h1>Loading</h1>
        )
    }
    const loaded = () =>{
        return (
          <div className="show">
            <h1>{stock.name}</h1>
            <h2>Last Price: {stock.lastPrice}</h2>
            {stock.change > 0 ? (
              <h2 style={{ color: "green" }}>Change: {stock.change}</h2>
            ) : (
              <h2 style={{ color: "red" }}>Change: {stock.change}</h2>
            )}
            <h2>high: {stock.high}</h2>
            <h2>low: {stock.low}</h2>
            <h2>open: {stock.open}</h2>
          </div>
        );
    }

  return stock ? loaded() : loading();
}
