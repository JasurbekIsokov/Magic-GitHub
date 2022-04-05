"use script";

//  https://api.github.com/users/defunkt -> bu yerda users dan keyin username keladi

const search = document.querySelector(".search");
const profileBtn = document.querySelector(".profile_btn");
const publicRepos = document.querySelector(".public_repos-text");
const publikGists = document.querySelector(".publik_gists-text");
const followers = document.querySelector(".followers-text");
const following = document.querySelector(".following");
const company = document.querySelector(".company_paragraph");
const blog = document.querySelector("blog_paragraph");
const locationName = document.querySelector(".location_paragraph");
const member = document.querySelector(".member_paragraph");
const repoName = document.querySelector(".repo_name");
const stars = document.querySelector(".stars_paragraph");
const watchers = document.querySelector(".watchers_paragraph");
const forks = document.querySelector(".forks_paragraph");

const section1 = document.querySelector(".section1");
const repoSection = document.querySelector(".repo_section");

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log(search.value);
  }
});

search.addEventListener("input", function () {
  getCountryAsync();
});

const getCountryAsync = async function () {
  // https://api.github.com/users/defunkt
  try {
    const dataJSON = await fetch(
      `https://api.github.com/users/${search.value}?client_id=d487070e8ebeb53eb623&client_secret=f231d73655a740d44c8f87a2e9df95e1fa919385`
    );
    console.log(dataJSON.ok);
    if (!dataJSON.ok) {
      console.log("jkkjg");
      throw new Error(`Username topilmadi...`);
    }
    const data = await dataJSON.json();

    console.log(data);

    const repoJson = await fetch(
      `https://api.github.com/users/${search.value}/repos`
    );
    const repos = await repoJson.json();

    console.log(repos);

    section1.innerHTML = "";
    repoSection.innerHTML = "";
    renderHtml(data);
    arrFor(repos);
  } catch (error) {
    return error;
  }
};

// // btn.addEventListener('click', getCountryAsync);

function renderHtml(data) {
  let html = `<div class="about">
  <div class="about__section1">
    <img
      src="${data.avatar_url}"
      alt="Img profile"
      class="profileimg"
    />
    <a href="${data.html_url}" class="profile_btn">View Profile</a>
  </div>
  <div class="about__section2">
    <div class="about__section2--top">
      <span class="public_repos activity"
        >Public Repos:
        <p class="public_repos-text paragraph">${data.public_repos}</p
      ></span>
      <span class="publik_gists activity"
        >Publik Gists: 12
        <p class="publik_gists-text paragraph">${data.public_gists}</p
      ></span>
      <span class="follower activity"
        >Followers:
        <p class="followers-text paragraph">${data.followers}</p
      ></span>
      <span class="following activity"
        >Following:
        <p class="following-text paragraph">${data.following}</p
      ></span>
    </div>
    <div class="about_section--table">
      <table class="mytable">
        <span class="company tabletd"
          >Company:
          <p class="paragraph company_paragraph">${data.company}</p
        ></span>

        <span class="blog tabletd"
          >Website/Blog:
          <p class="paragraph blog_paragraph">${data.blog}</p
        ></span>

        <span class="location tabletd"
          >Location:
          <p class="paragraph location_paragraph">${data.location}</p
        ></span>

        <span class="member tabletd"
          >Member Since:
          <p class="paragraph member_paragraph">${data.created_at}</p
        ></span>
      </table>
    </div>
  </div>
</div>`;

  section1.insertAdjacentHTML("afterbegin", html);
}

function renderHtml2(element) {
  let html2 = ` <h2 class="latest_repos">Latest Repos</h2>
  <div class="repos">
    <p class="repo_name">${element.name}</p>

    <div class="statistc">
      <span class="stars statis"
        >Stars:
        <p class="paragraph stars_paragraph">${element.stargazers_count}</p
      ></span>
      <span class="watchers statis"
        >Watchers: ${element.watchers}
        <p class="paragraph watchers_paragraph"></p
      ></span>
      <span class="forks statis"
        >Forks:${element.forks}
        <p class="paragraph forks_paragraph"></p
      ></span>
    </div>
  </div>`;

  repoSection.insertAdjacentHTML("afterbegin", html2);
}

function arrFor(repos) {
  repos.forEach((val, key) => {
    renderHtml2(val);
    console.log(key);
  });
}
