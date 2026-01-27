document.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.page-section').forEach(s => {
          s.classList.remove('active');
          s.style.display = 'none';
        });

        this.classList.add('active');
        let id = this.getAttribute('href').replace('#', '');
        let section = document.getElementById(id);

        if (section) {
          section.classList.add('active');
          section.style.display = 'block';
          if (window.innerWidth <= 700) {
            setTimeout(() => {
              document.getElementById("main-content-top").scrollIntoView({ behavior: "smooth" });
            }, 10);
          }
        }
      });
    });
