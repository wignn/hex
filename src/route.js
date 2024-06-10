const novels = {
  ALL: [
    {
      title: "Modern Villainess: It’s Not Easy Building a Corporate Empire Before the Crash - Volume 01",
      image: "asset/M-C-1.jpg",
      description: "Drama, Economy, Comedy",
      link: "Hk.html"
    },
    // add more novels to the ALL category
  ],
  action: [
    {
      title: "The Vexations of a Shut-In Vampire Princess - Volume 01",
      image: "asset/ybbkoiqyprr71 (1).jpg",
      description: "Action, Drama, Comedy",
      link: "hikikomari/TOC.html"
    },
    // add more novels to the action category
  ],
  romance: [
    {
      title: "The Vexations of a Shut-In Vampire Princess - Volume 01",
      image: "asset/hikikomari.jpg",
      description: "Action, Drama, Comedy",
      link: "hikikomari/TOC.html"
    },
    // add more novels to the romance category
  ],
  fantasy: [
    {
      title: "The Vexations of a Shut-In Vampire Princess - Volume 01",
      image: "asset/bnyewuwbltu71.jpg",
      description: "Action, Drama, Comedy",
      link: "hikikomari/TOC.html"
    },
    // add more novels to the fantasy category
  ],
  horror: [
    {
      title: "Deep Sea Embers",
      image: "asset/DSE-C-1.jpeg",
      description: "Action, Adventure, Fantasy, Horror, Mystery, Psychological, Supernatural",
      link: "modern/TOC-modern.html"
    },
    // add more novels to the horror category
  ]
};

function showSection(sectionId) {
  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add('active');
  activeSection.style.transition = 'opacity 0.5s ease-in-out';
  activeSection.style.opacity = 1;
  
  const novelData = novels[sectionId];
  const html = novelData.map(novel => {
    return `
      <div class="col-md-3 mb-4">
        <div class="card bg-dark text-white">
          <img src="${novel.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${novel.title}</h5>
            <p class="card-text">${novel.description}</p>
            <a href="${novel.link}" class="btn btn-primary">Read</a>
          </div>
        </div>
      </div>
    `;
  }).join('');
  activeSection.textContent = html;
}