import React, { useEffect, useState } from 'react';

export default function Recommender() {
  const [EthAddress, setEthAddress] = useState('');
  const [AmtSent, setAmtSent] = useState('');
  const [otp, setotp] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( EthAddress )
    console.log( AmtSent )
    console.log( otp ) 
    if (AmtSent < 0)
      alert("Can't transfer negative amount")
    else
      alert("No inconsistencies found")
   };
  
  return (
    <div class="card bg-info text-dark" >
  <form onSubmit={handleSubmit}>
    <div class="form-group col-sm-4">
    <h4>ETH Address:</h4>
    <input onChange={event => setEthAddress(event.target.value)} value={EthAddress} 
        class="form-control form-control-lg" type="text" />
    </div>
    <div class="form-group col-sm-4">
    <h4>Amount to Send</h4>
    <input onChange={event => setAmtSent(event.target.value)} value={AmtSent}
          class="form-control form-control-lg" type="number" />
    </div>
    
    <div class="form-group col-sm-4">
    <h4>OTP Authentication</h4>
    <input onChange={event => setotp(event.target.value)} value={otp}
          class="form-control form-control-lg" type="number" />
    <h4 id="otpHelp" class="text-danger"> Must be a number</h4> 
    </div>

  <div class="row">
    <div class="col text-center">
      <div class="form-group col-sm-4">
        <button type="submit" class="btn btn-primary btn-lg">Submit</button>
      </div>
    </div>
  </div>
  </form>
  </div>
  );
}

