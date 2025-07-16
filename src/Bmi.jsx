import React from 'react'

function Bmi() {
  return (
    <div className='w-full h-screen flex bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 flex-col justify-center items-center'>
        <h2 className='font-bold text-3xl font-serif'>BMI CALCULATOR</h2>
        <div className='w-2/6 h-5/6 bg-amber-50 border-2 border-black-600 shadow-2xl rounded-2xl flex flex-col justify-center items-center p-3 gap-4 '>
            <input type="text" name="" id="" placeholder='Height(cm)' className='font-bold text-xl w-full p-4 border-2 border-fuchsia-950 rounded-2xl outline-0' />
             <input type="text" name="" id="" placeholder='Weight(Kg)' className='font-bold text-xl w-full p-4 border-2 border-fuchsia-950 rounded-2xl outline-0' />
             <button className='w-4/6 p-4 rounded-4xl bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 font-bold font-serif text-xl'>Calculate BMI</button>

        </div>
    </div>
  )
}

export default Bmi