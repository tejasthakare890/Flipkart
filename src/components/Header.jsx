import './Header.css';


function UnderNav(){
    


    return(
        
        <div className="Main">
            <div className="Grocery" href="/Login" > 
      <img className='grocery' src='/grocery.png' alt='grocery' />
            <b id='grocery'>Grocery</b>
            </div>

            <div className="Mobiles" href="/Login">
      <img className='mobiles' src='/Mobiles.png' alt='mobiles' />
            <b id='mobiles'>Mobiles</b>
            </div>

            <div className="Fashion" href="/Login">
      <img className='fashion' src='/Fashion.png' alt='Fashion' />
            <b id='fashion'>Fashion</b>
            </div>

            <div className="Electronics" href="/Login">
      <img className='electronics' src='/Electronics.png' alt='Electronics' />
            <b id='electronics'>Electronics</b>
            </div>
            <div className="Appliances" href="/Login">
      <img className='appliances' src='/Appliances.png' alt='Appliances' />
            <b id='appliances'>Appliances</b>
            </div>

            <div className="Travel" href="/Login">
      <img className='travel' src='/Travel.png' alt='Travel' />
            <b id='travel'>Travel</b>
            </div>

        </div>
    );
}

export default UnderNav;