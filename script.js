const sectionData = {
  section: {
      showArrows: true,
      showPageDots: true,
  },
  slideData: [
      {
          title: "Web Design",
          Description: "Explore the art of creating stunning websites.",
          image: "https://cdn.pixabay.com/photo/2017/11/07/07/49/web-2925929_640.jpg",
          buttonLabel: "Learn More",
          buttonLink: "#",
          style: {
              textAlignment: "center",
              contentPosition: "bottom-left"
          },
      },
      {
          title: "Email Marketing",
          Description: "Master the craft of effective email campaigns.",
          image: "https://cdn.pixabay.com/photo/2012/11/13/17/44/e-mail-65927_1280.jpg",
          buttonLabel: "Get Started",
          buttonLink: "#",
          style: {
              textAlignment: "left",
              contentPosition: "bottom-left"
          },
      },
      {
          title: "Photography",
          Description: "Capture moments with precision and creativity.",
          image: "https://cdn.pixabay.com/photo/2021/10/30/18/03/bridge-6755247_1280.jpg",
          buttonLabel: "Discover More",
          buttonLink: "#",
          style: {
              textAlignment: "center",
              contentPosition: "bottom-left"
          },
      },
  ]
};

let splide;  // Declare a variable to hold the Splide instance

document.addEventListener('DOMContentLoaded', function() {
  const sliderContent = document.getElementById('slider-content');
  const positionDropdown = document.getElementById('position-dropdown');
  
  function getTextAlignment(position) {
      switch(position) {
          case 'top-left':
          case 'bottom-left':
          case 'center-left':
              return 'left';
          case 'top-right':
          case 'bottom-right':
          case 'center-right':
              return 'right';
          case 'top-center':
          case 'bottom-center':
          case 'center':
              return 'center';
          default:
              return 'center';
      }
  }

  function renderSlides() {
      sliderContent.innerHTML = ''; // Clear existing slides
      
      sectionData.slideData.forEach(slide => {
          const slideItem = document.createElement('li');
          slideItem.className = 'splide__slide';
          slideItem.style.backgroundImage = `url(${slide.image})`;
  
          slideItem.innerHTML = `
              <div class="slide-content ${slide.style.contentPosition}" style="text-align: ${slide.style.textAlignment};">
                  <h2>${slide.title}</h2>
                  <p>${slide.Description}</p>
                  <a href="${slide.buttonLink}" class="slide-button">${slide.buttonLabel}</a>
              </div>
          `;
  
          sliderContent.appendChild(slideItem);
      });

      if (splide) {
          splide.destroy(); // Destroy the existing Splide instance
      }

      splide = new Splide('.splide', {
          type   : 'loop',
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: sectionData.section.showArrows,
          pagination: sectionData.section.showPageDots,
      }).mount();
  }
  
  renderSlides();
  
  positionDropdown.addEventListener('change', function() {
      const selectedPosition = this.value;
      
      sectionData.slideData.forEach(slide => {
          slide.style.contentPosition = selectedPosition;
          slide.style.textAlignment = getTextAlignment(selectedPosition);
      });
      
      renderSlides();
  });
});
