function updateCountdown() {	
    const targetDate = new Date("October 27, 2023 00:00:00").getTime();	
    const now = new Date().getTime();	
    const distance = targetDate - now;	
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));	
    const hours = Math.floor(	
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)	
    );	
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));	
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);	
  
    document.querySelector(	
      ".timedown"	
    ).innerHTML = `27. ŘÍJEN 2023, BUDOVA MICROSOFT, PRAHA (Místnost Praha - Recepce) -	
      ZBÝVÁ: ${days} DNÍ ${hours} HODIN ${minutes} MINUT ${seconds} VTEŘIN`;	
  
    if (distance < 0) {	
      clearInterval(interval);	
      document.querySelector(".timedown").innerHTML = "Event již začal!";	
    }	
  }	
  
  const interval = setInterval(updateCountdown, 1000);