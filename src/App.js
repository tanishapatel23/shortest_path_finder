import React, { useState } from 'react'; 
import './App.css';
import Routes from './routes';
import Loader from './loader';
import IITGLogo from './Maps/IITG_logo.png'; 

const App = () => {
  const [data, setData] = useState(null);
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const source = e.target[0].value;
    const destination = e.target[1].value;

    setLoading(true);
    setDisplay(false);

    try {
      const response = await fetch(`https://shortest-path-finder-3tv3.onrender.com/shortd/${source}/${destination}`);
      const jsonData = await response.json();
      setData(jsonData);
      setDisplay(true);
    } catch (error) {
      console.error('Error fetching path:', error);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }

    e.target.reset();
  };

  return (
    <>
      {}
      <img src={IITGLogo} alt="IIT Guwahati Logo" className="iitgLogo" />

      <div className='mainContainer'>
        <div className='projectHeader'>Shortest Path Finder</div>

        <div className='Maps'>
          <div className='satMap' />
          <div className='outMap' />
        </div>

        <div className='formInput'>
          <form onSubmit={onsubmitHandler} className='formGroup'>
            <div className='dualInput'>
              <div className='inputBlock'>
                <label htmlFor='source'>Source</label>
                <input id='source' name='a' type='number' min={1} max={64} placeholder='Enter Source' required />
              </div>
              <div className='inputBlock'>
                <label htmlFor='destination'>Destination</label>
                <input id='destination' name='b' type='number' min={1} max={64} placeholder='Enter Destination' required />
              </div>
            </div>

            {}
            <button type="submit" className="button" style={{ "--clr": "#7808d0" }}>
              <span className="button__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Submit
            </button>
          </form>
        </div>

        <div className='projectDisplay'>
          {loading && <Loader />}
          {!loading && display && data && <Routes dataPoint={data} />}
        </div>
      </div>
    </>
  );
};

export default App;
