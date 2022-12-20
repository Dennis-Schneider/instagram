let posts = [
  {
    author: "CGPlanet",
    authorImg: "",
    image: "img/img (2).jpg",
    copy: "Das hier ist mein CG-Projekt nr. 1 👌",
    likes: 15,
    location: "",
    comments: [
      { author: "Steffi", comment: "Das ist mein Kommentar", likes: 0 },
      { author: "Klaus", comment: "Wasn das für ein Kram hier", likes: 15 },
      { author: "Hirsekopf", comment: "Der ist nicht allein", likes: 3 },
    ],
  },
  {
    author: "CG Masters",
    authorImg: "",
    image: "img/img (3).jpg",
    copy: "Wir liefern euch die besten 🖼️ graphics von allen!",
    likes: 15,
    location: "",
    comments: [],
  },
  {
    author: "CGPlanet",
    authorImg: "",
    image: "img/img (1).jpg",
    copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati deleniti repudiandae assumenda molestiae.",
    likes: 15,
    location: "",
    comments: [],
  },
  {
    author: "CG 4 ever",
    authorImg: "",
    image: "img/img (4).jpg",
    copy: "Doloremque obcaecati deleniti repudiandae assumenda molestiae qui dolorum dicta soluta impedit inventore! Eos aut illum quia odit?",
    likes: 15,
    location: "",
    comments: [
      { author: "Horst", comment: "Ich liebe es! ❤️", likes: 0 },
      { author: "Klaus", comment: "Wasn das für ein Kram hier", likes: 15 },
      { author: "Hirsekopf", comment: "Der ist nicht allein", likes: 3 },
    ],
  },
];

let icons = [
  {
    text: "Like",
    image:
      '<svg class="post-icon" viewBox="0 0 24 24"><path d="M 16.792 3.904 A 4.989 4.989 0 0 1 21.5 9.122 c 0 3.072 -2.652 4.959 -5.197 7.222 c -2.512 2.243 -3.865 3.469 -4.303 3.752 c -0.477 -0.309 -2.143 -1.823 -4.303 -3.752 C 5.141 14.072 2.5 12.167 2.5 9.122 a 4.989 4.989 0 0 1 4.708 -5.218 a 4.21 4.21 0 0 1 3.675 1.941 c 0.84 1.175 0.98 1.763 1.12 1.763 s 0.278 -0.588 1.11 -1.766 a 4.17 4.17 0 0 1 3.679 -1.938 m 0 -2 a 6.04 6.04 0 0 0 -4.797 2.127 a 6.052 6.052 0 0 0 -4.787 -2.127 A 6.985 6.985 0 0 0 0.5 9.122 c 0 3.61 2.55 5.827 5.015 7.97 c 0.283 0.246 0.569 0.494 0.853 0.747 l 1.027 0.918 a 44.998 44.998 0 0 0 3.518 3.018 a 2 2 0 0 0 2.174 0 a 45.263 45.263 0 0 0 3.626 -3.115 l 0.922 -0.824 c 0.293 -0.26 0.59 -0.519 0.885 -0.774 c 2.334 -2.025 4.98 -4.32 4.98 -7.94 a 6.985 6.985 0 0 0 -6.708 -7.218 Z"></path></svg>',
  },
  {
    text: "Message",
    image:
      '<svg class="post-icon none-fill" viewBox="0 0 24 24"><path d="M 20.656 17.008 a 9.993 9.993 0 1 0 -3.59 3.615 L 22 22 Z"></path></svg>',
  },

  {
    text: "Message",
    image:
      '<svg class="post-icon none-fill" viewBox="0 0 24 24"><line x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"></polygon></svg>',
  },
  {
    text: "Bookmark",
    image:
      '<svg class="post-icon none-fill" viewBox="0 0 24 24"><polygon points ="20 21 12 13.44 4 21 4 3 20 3 20 21"></polygon></svg>',
  },
];

icons.indexOf("Like");

function render() {
  let content = document.getElementById("posts");
  content.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    content.innerHTML += `
    <div class="post">
    <div class="post-header">
      <div class="post-header-l"></div>
      <div class="post-header-m">${post["author"]}</div>
      <div class="post-header-r"></div>
    </div>
    <div class="post-img"><img src="${post["image"]}"></div>
    <div class="post-bottom">
    <div class="post-btns">
      <div class="post-btns-l">
        <div class="icon post-btn-l">${icons[0]["image"]}</div>
        <div class="icon post-btn-c">${icons[1]["image"]}</div>
        <div class="icon post-btn-m">${icons[2]["image"]}</div>
      </div>
      <div class="post-btns-r">
        <div class="icon post-btn-b">${icons[3]["image"]}</div>
      </div>
    </div>
    <div class="post-likes">Gefällt ${post["likes"]} Mal</div>
    <div  class="post-copy">${post["copy"]}</div>
    <div id="post-comments${i}" class="post-comments"></div>
    <div class="post-footer"><input class="comment-input" placeholder="Kommentieren..."></div>
  </div></div>
    `;
    for (let j = 0; j < post["comments"].length; j++) {
      const comment = post["comments"][j];
      document.getElementById(
        "post-comments" + [i]
      ).innerHTML += `<div id="comment-${j}" class="comment"><span class="comment-author">${comment["author"]}</span><span class="comment-text">${comment["comment"]}</span>
      </div>`;
    }
  }
}
