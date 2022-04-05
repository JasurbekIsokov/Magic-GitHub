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

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log(search.value);
  }
});
