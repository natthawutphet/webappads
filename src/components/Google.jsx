import React from 'react'
import "./Google.css"

function Google() {


    function Google() {
        document.getElementById("popup").style.display = "block";
            var countdownElement = document.getElementById("countdown");
            var timeLeft = 25;
            function countdown() {
              if (timeLeft > 0) {
                countdownElement.textContent = timeLeft;
                timeLeft--;
              } else {
                countdownElement.textContent=window.location="https://www.ad-dark.co/template-website-google-ads.zip";
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
    
        <div className="vdo">
       
          <video src=""></video>
        </div>
    
      <div className="dowload"> 

        <button onClick={Google}>Dowload Google</button>
    

    </div>
    
    
    </div>

    <div className="popup" id="popup">
      <div class="popup-content">
        <h2> <div id="countdown">  25 </div></h2>
        <p> Dowload sale Page Google</p>
        <button onClick={hidePopup}>ยืนยัน</button>
      </div>
    </div>
      
    </>
  )
}

export default Google
