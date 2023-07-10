import React from 'react'
import './Dowload.css'
function Dowload() {

function facebook() {
    document.getElementById("popup").style.display = "block";
        var countdownElement = document.getElementById("countdown");
        var timeLeft = 25;
        function countdown() {
          if (timeLeft > 0) {
            countdownElement.textContent = timeLeft;
            timeLeft--;
          } else {
            countdownElement.textContent=window.location="https://www.ad-dark.co/template-website-Facebook-ads.zip";
            clearInterval(timerId);
          }
        }
        var timerId = setInterval(countdown, 1000);
}
function hidePopup() {
    document.getElementById("popup").style.display = "none";
}  

  return (
    <>
     
    <div className="container">  
        <h1>แจกฟรี เครื่องมือ ใช้ทำโฆษณา สายเทา</h1>
    
        <div className="vdo" >
       
        <iframe className='facebook_ads' src="https://www.youtube.com/embed/JeMR23GFmv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <video src=""></video>
        </div>
    
      <div className="dowload"> 

        <button onClick={facebook}>Dowload Facebook</button>
    

    </div>
    
    
    </div>

    <div className="popup" id="popup">
      <div class="popup-content">
        <h2> <div id="countdown">  25 </div></h2>
        <p> Dowload sale Page Facebook</p>
        <button onClick={hidePopup}>ยืนยัน</button>
      </div>
    </div>

      
    </>
  )
}

export default Dowload
