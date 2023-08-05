import React from 'react';

 function Card(props){
    //const [name,gmail] = props;
    return(
<div className='tc bg-light-green dib pa3 ma2 grow bw2 shadow-10 br3'>
<img alt='Photos' src={`https://robohash.org/test${props.id}?300x300`}></img>
<>
<h2>{props.name}</h2>
<p>{props.gmail}</p>
</>
</div>
    );
}
export default Card;

