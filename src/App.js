import './App.css';

function App() {
  return (
    <>
      <div className="main-wrapper">
        <nav className='navbar'>
          <div className="container">
            <div className='brand-box'>
              <a className='brand'>we go wifi</a>
              <div className='manu-item'>
                <ul className='item-wrapper'>
                  <li className='li-item'>Membership plans</li>
                  <li className='li-item'>Support & Fag</li>
                </ul>
                <div className='try-now'>
                  <p className='join-now'>Join Now </p>
                  <i class="fa-solid fa-arrow-right-long right-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header>
          <div className="container">
            <div className='back-wrapper'>
              <div className='title-wrapper'>
                <div className='heading-wrapper'>
                  <p className='main-title'>Wireless Mobile Internet</p>
                  <p className='we-go'>We go with you!</p>
                </div>
              </div>
            </div>
            <div className='exclusive-wrapper'>
              <div>
                <p className='exclusive-title'>Exclusive membership</p>
                <p className='refferal-start'>By refferal only starting jan 31st</p>
              </div>
              <button className='btn'>Request to be a member
                <i class="fa-solid fa-arrow-right-long right-arrow"></i>
              </button>
            </div>
          </div>
        </header>
      </div>
      <section className='card-section'>
        <div className="container">
          <div className="row">
            <div className="column1">
              <p className='get-started'>How do I get started?</p>
            </div>
            <div className="column2">
              <div>
                <div>
                  <span>1</span>
                  
                </div>
                <p>Fill out the Membership request from. This can takes 2 business days for approval</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
