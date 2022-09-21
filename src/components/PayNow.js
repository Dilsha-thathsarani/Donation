import React from 'react'
import './Style/card.css'

export default function PayNow ({
  setClickBtnId,
  donateAmount,
  setDonateAmount
}) {
  const handleChange = e => {
    setDonateAmount(e.target.value)
  }
  return (
    <div>
      <div
        onClick={() => {
          setClickBtnId('')
          setDonateAmount('')
        }}
        className='close'
      >
        &times;
      </div>
      <h2 className='pay-title'>Select the amount that you want to donate</h2>
      <div className='radio-btn'>
        <input
          type='radio'
          value='10'
          checked={donateAmount === '10'}
          onChange={e => handleChange(e)}
        />
          <label for='html'>$10</label>
        <br></br>
      </div>
      <div className='radio-btn'>
        <input
          type='radio'
          value='50'
          checked={donateAmount === '50'}
          onChange={e => handleChange(e)}
        />
          <label for='html'>$50</label>
        <br></br>
      </div>
      <div className='radio-btn'>
        <input
          type='radio'
          value='100'
          checked={donateAmount === '100'}
          onChange={e => handleChange(e)}
        />
          <label for='html'>$100</label>
        <br></br>
      </div>
      <div className='radio-btn'>
        <input
          type='radio'
          value='500'
          checked={donateAmount === '500'}
          onChange={e => handleChange(e)}
        />
          <label for='html'>$500</label>
        <br></br>
      </div>
      <div className='radio-btn'>
        <input type='radio' id='html' name='fav_language' value='1000' />
          <label for='html'>$1000</label>
        <br></br>
      </div>
    </div>
  )
}
