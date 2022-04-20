import { Icon } from '@iconify/react';
import '../../UI1/Home.css'
import { SliderItems as popularProducts } from '../../data'

const MiniProductHolder = ({ }) => {
    return (
        <div >
            <div style={{ display: 'grid', gridTemplateColumns: ' repeat(2,1fr)', rowGap: '10px' }} >
                {/* ---------------message--------------------------------- */}
                {popularProducts.filter((product, index) => (index < 6)).map((product, index) => (
                    <MiniSideProductForMobile product={product}></MiniSideProductForMobile>
                ))}

            </div>
          
            <button className='btn btn-primary'style={{width:'100%', margin:'10px 10px'}}>View All</button>
        </div>
    )
}
export default MiniProductHolder;
const MiniSideProductForMobile = ({ product }) => {
    return (
        <div>

            <div className="message " style={{ display: 'flex', flexDirection: 'column', height: '120px', margin: '0px 10px', alignItems: 'center' }}>
                <img src={product.img}
                    alt="" style={{ width: '90%', height: '50%', borderRadius: '1rem' }} />

                <div className="">
                    <h5 style={{ fontSize: '0.6rem', fontSizeAdjust: '0.9' }}>{product.title}</h5>

               
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', width: '100%', marginRight: '10px', marginLeft: '15px'  }}>
                    <p style={{fontSize: '0.6rem'}} className="text-muted">Rs. 500</p>
                  

                </div>
                </div>


            </div>

        </div>
    );
}


