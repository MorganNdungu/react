const Map =()=>{
let price= [120 ,150,180, 90];
    
           const increment =price.map((price) => price * 0.1);
           let nowPrice =price.map((price)=>price + (increment));
            return(
                <div>
                    <h1>increment on prices are: {increment}</h1>
                    <h1>now price is: {nowPrice}</h1>
                </div>
            );
        //  const nowPrice= price.map((increment)=> price + {increment})
        //  return(
        //     <div>
        //         <h1>NOw prices are: {nowPrice}</h1>
        //     </div>
        //  );

}
export default Map;