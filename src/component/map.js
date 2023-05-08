const Map =()=>{
let price= [120 ,150,180, 90];
    
           const increment =price.map((price) => price * 0.1);
           let now=[(increment)];
           let nowPrice =now.map((now)=> price + (increment));

            return(
                <div>
                    <h1>increment on prices are: {increment}</h1>
                    <h2>now price is: {nowPrice}</h2>
                </div>
            );
           

}
export default Map;