import React, { useState, useEffect } from "react"
import './Presentation.css'
import ReactLogo from '../../assets/react.svg'
import ViteLogo from '../../assets/vite.svg'
const Presentation = () => {
    const [textShadow, setTextShadow] = useState('0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 75px #0ff');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextShadow(textShadow => {
                const shadowValues = textShadow.split(',');
                const firstValue = shadowValues.shift();
                shadowValues.push(firstValue);
                return shadowValues.join(',');
            });
        }, 100);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <p style={{ color: '#fff', textShadow }} className="powered">
                Powered by
            </p>
            <div>

                <img src={ViteLogo} className="logo" alt="Vite logo" />


                <img src={ReactLogo} className="logo react rotate" alt="React logo" />

            </div>
            <h1>Vite + React</h1>

        </>
    )

}
export default Presentation