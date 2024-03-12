document.addEventListener("DOMContentLoaded", function() {
  var creepyImg = document.getElementById("creepyImg");
  var creepyMessage = document.getElementById("creepyMessage");

  function setCreepyImage() {
      // Check if the screen width is less than a certain level (e.g., 600px)
      var isMobile = window.innerWidth < 600;

      // Set the class based on the screen width
      if (isMobile) {
          creepyImg.classList.add('mobile');
          creepyMessage.innerText = "Why are you here?";
      } else {
          creepyImg.classList.remove('mobile');
          creepyMessage.innerText = "Why are you here?";
      }
  }

  // Set creepy image initially
  setCreepyImage();

  // Update creepy image when the window is resized
  window.addEventListener('resize', setCreepyImage);

  document.getElementById("choosePathButton").addEventListener("click", function() {
      document.getElementById("creepyImg").style.display = "flex";
      document.querySelector(".container").style.display = "none";
  });

  document.getElementById("option1").addEventListener("click", function() {
      window.location.href = "dashboard.html"; // Redirect to dashboard.html
  });

  document.getElementById("option2").addEventListener("click", function() {
      window.location.href = "about.html"; // Redirect to about.html
  });

  document.getElementById("cancelButton").addEventListener("click", function() {
      document.getElementById("creepyImg").style.display = "none";
  });

  document.addEventListener('click', function(e) {
      // Create a blood burst container
      var bloodBurstContainer = document.createElement('div');
      bloodBurstContainer.className = 'blood-burst-container';
      bloodBurstContainer.style.position = 'absolute';
      bloodBurstContainer.style.left = e.clientX + 'px';
      bloodBurstContainer.style.top = e.clientY + 'px';
      
      // Create blood burst elements
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
      
      // Append the blood burst container to the body
      document.body.appendChild(bloodBurstContainer);
      
      // Remove the blood burst container after animation
      setTimeout(function() {
          bloodBurstContainer.remove();
      }, 1000);
  });
});
