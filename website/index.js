$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Cloud Engineer',
        'Cloud Architect',
        'AI Evangelist',
        'Problem Solver',
        'Branding Expert',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'Cloud Engineer',
        'Cloud Architect',
        'AI Evangelist',
        'Problem Solver',
        'Branding Expert',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".counter-number");

  async function updateCounter() {
    try {
      const response = await fetch("https://axhsybpjh4wcnrvn6v3xpsra7i0xsewl.lambda-url.us-east-1.on.aws/");
      const data = await response.json();

      if (data.views !== undefined) {
        counter.innerHTML = `Views: ${data.views}`;
      } else {
        counter.innerHTML = "Views: N/A";
      }
    } catch (error) {
      console.error("Failed to fetch view count:", error);
      counter.innerHTML = "Couldn't read views";
    }
  }

  updateCounter();
});
