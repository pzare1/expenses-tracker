import React from 'react'
import '../App.css'
function Header({totalIncome}) {
    console.log(totalIncome)
  return (
        <div className='container'>
            <div className='row mainRow'>
                <div className='col-md-8 mx-auto d-flex justify-content-between'>
                    <div className='col-md-6'>
                        <h2 className='text-primary p-2 btn btn-light text-lg'>Cost Calculator</h2>
                    </div>
                    <div className='col-md-6'>
                        <h3 className='btn btn-primary'>{`Cost $ ${totalIncome}`}</h3>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header