let btn = document.getElementById("btn");

document.addEventListener('DOMContentLoaded', function() {
    const ddBtn = document.getElementById('dropdown-btn');
    const ddList = document.getElementById('dropdown-menu');

    function toggleMenu() {
        if (window.innerWidth < 928) {
            ddList.classList.toggle('active');
        }
    }

    function handleResize() {
        if (window.innerWidth >= 928) {
            ddList.classList.remove('active');
        }
    }

    ddBtn.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();
});

btn.addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let companyname = document.getElementById("companyname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let servica = document.getElementById("servica").value;
    let message = document.getElementById("message").value;
    
    var data = JSON.stringify({
        "name": name,
        "companyname": companyname,
        "email": email,
        "phone": phone,
        "servica": servica,
        "message": message
      });
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://makertime-b895.restdb.io/rest/query");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-apikey", "94e241394df9f069696c9aa705c565cfcfab4");
      xhr.setRequestHeader("cache-control", "no-cache");
      
      xhr.send(data);
});