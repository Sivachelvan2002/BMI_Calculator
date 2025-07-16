import React, { useState } from 'react'

function Bmi() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [bmicategory, setBmicategory] = useState("");

   function calculateBmi() {
    const heightInfloat = parseFloat(height) / 100;
    const weightInfloat = parseFloat(weight);

    if (weightInfloat > 0 && heightInfloat > 0) {
        const result = weightInfloat / (heightInfloat * heightInfloat);
        const rounded = parseFloat(result.toFixed(1)); 
        setBmi(rounded);

        
        if (rounded < 16.0) {
            setBmicategory("Severely underweight");
        } else if (rounded >= 16.0 && rounded <= 16.9) {
            setBmicategory("Very underweight");
        } else if (rounded >= 17.0 && rounded <= 18.4) {
            setBmicategory("Underweight");
        } else if (rounded >= 18.5 && rounded <= 24.9) {
            setBmicategory("Normal (healthy weight)");
        } else if (rounded >= 25.0 && rounded <= 29.9) {
            setBmicategory("Overweight");
        } else if (rounded >= 30.0 && rounded <= 34.9) {
            setBmicategory("Obese Class I (Moderate)");
        } else if (rounded >= 35.0 && rounded <= 39.9) {
            setBmicategory("Obese Class II (Severe)");
        } else if (rounded >= 40.0) {
            setBmicategory("Obese Class III (Very severe)");
        } else {
            setBmicategory("Invalid BMI value");
        }

    } else {
        setBmi("");
        setBmicategory("Invalid input");
    }
}



    return (
        <div className='w-full h-screen flex bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500       flex-col justify-center items-center'>
            <h2 className='font-bold text-3xl font-serif my-2'>BMI CALCULATOR</h2>
            <div className='w-2/6 h-5/6 bg-amber-50 border-2 border-black-600  rounded-2xl flex flex-col justify-center items-center p-3 gap-4 shadow transition-all duration-300 hover:scale-[1.01] hover:shadow-xl'>
                <input type="text" name="" id="" placeholder='Height(cm)' className='font-bold text-xl w-full p-4 border-2 border-fuchsia-950 rounded-2xl outline-0' onChange={(e) => setHeight(e.target.value)} />
                <input type="text" name="" id="" placeholder='Weight(Kg)' className='font-bold text-xl w-full p-4 border-2 border-fuchsia-950 rounded-2xl outline-0' onChange={(e) => setWeight(e.target.value)} />
                <button className='w-4/6 p-4 rounded-4xl bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 font-bold font-serif text-xl' onClick={calculateBmi}>Calculate BMI</button>
                <p className='font-semibold text-xl'>Result : {bmi}</p>
                <p className='font-semibold text-xl'>Category : {bmicategory} </p>

            </div>
        </div>
    )
}

export default Bmi