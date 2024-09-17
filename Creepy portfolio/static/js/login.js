document.addEventListener("DOMContentLoaded", function() {
    var creepyImg = document.getElementById("creepyImg");
    var creepyMessage = document.getElementById("creepyMessage");
  
    function setCreepyImage() {
        var isMobile = window.innerWidth < 600;
  
        if (isMobile) {
            creepyImg.classList.add('mobile');
            creepyMessage.innerText = "Why are you here?";
        } else {
            creepyImg.classList.remove('mobile');
            creepyMessage.innerText = "Why are you here?";
        }
    }
  
    setCreepyImage();
  
    window.addEventListener('resize', setCreepyImage);
  
    document.getElementById("choosePathButton").addEventListener("click", function() {
        creepyImg.style.display = "flex";
        document.querySelector(".container").style.display = "none";
    });
  
    document.getElementById("option1").addEventListener("click", function() {
        window.location.href = "/dashboard";
    });
  
    document.getElementById("option2").addEventListener("click", function() {
        window.location.href = "/about";
    });
  
    document.getElementById("cancelButton").addEventListener("click", function() {
        creepyImg.style.display = "none";
        document.querySelector(".container").style.display = "flex";
    });
  
    document.addEventListener('click', function(e) {
        var bloodBurstContainer = document.createElement('div');
        bloodBurstContainer.className = 'blood-burst-container';
        bloodBurstContainer.style.position = 'absolute';
        bloodBurstContainer.style.left = e.clientX + 'px';
        bloodBurstContainer.style.top = e.clientY + 'px';
        
        for (var i = 0; i < 10; i++) {
            var bloodBurst = document.createElement('div');
            bloodBurst.className = 'blood-burst';
            bloodBurst.style.background = 'red';
            bloodBurst.style.width = Math.floor(Math.random() * 10 + 5) + 'px';
            bloodBurst.style.height = Math.floor(Math.random() * 10 + 5) + 'px';
            bloodBurst.style.borderRadius = '50%';
            bloodBurst.style.position = 'absolute';
            bloodBurst.style.left = '50%';
            bloodBurst.style.top = '50%';
            bloodBurst.style.transform = 'translate(-50%, -50%)';
            bloodBurst.style.animation = 'blood-burst-animation 1s ease-out';
            bloodBurstContainer.appendChild(bloodBurst);
        }
        
        document.body.appendChild(bloodBurstContainer);
        
        setTimeout(function() {
            bloodBurstContainer.remove();
        }, 1000);
    });
  });
  