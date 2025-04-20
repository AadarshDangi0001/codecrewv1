const faqItems = document.querySelectorAll('.faq1-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq1-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });


gsap.to(".imgscollor  .box",{
    transform: "translateX(-70%)",
    scrollTrigger:{
        trigger:".imgscollor",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top -150%",
        scrub:2,
        pin: true

    }
})

gsap.to(".head h1",{
    transform: "translateX(-50%)",
    scrollTrigger:{
        trigger:".head",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top -150%",
        scrub:2,
        // pin: true

    }
})

gsap.to(".head2 h1",{
    transform: "translateX(20%)",
    scrollTrigger:{
        trigger:".head2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top -150%",
        scrub:2,
        // pin: true

    }
})


function setupCursorInteractions() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".cursor");
  
    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
    });
  
    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });
  
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
  
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.x = x;
        circle.y = y;
  
        circle.style.scale = (circles.length - index) / circles.length;
  
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.1;
        y += (nextCircle.y - y) * 0.1;
      });
      requestAnimationFrame(animateCircles);
    }
  
    animateCircles();
  }
  
  setupCursorInteractions();


  let lastScrollY = window.scrollY;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      navbar.style.top = "-100%"; 
    } else {
      navbar.style.top = "0"; 
    }
    lastScrollY = window.scrollY;
  });