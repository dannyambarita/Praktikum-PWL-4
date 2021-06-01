import React, { Component } from 'react';
import data from "./Produk.json";

class Tampilan2 extends Component {
	render() {
		return (
            <section className='tengah'>
				<div className='label'>
				   <h3>{data.name}</h3>
				   <p>Go get your favorite Flower!</p>
				   <img height='400' src={data.image} alt='sampel' id='image'/>
				</div>
				<div className='keterangan'>
				   <p></p>
				   <p className='color'>Nama : {data.color}</p>
				   <p className="price">Harga : {data.price} ({data.priceCurrency})</p>
				   <br></br>
				</div>
				<button>Buy it for {data.price} ({data.priceCurrency})</button>
            </section>
        );
    }
} 
export default Tampilan2;