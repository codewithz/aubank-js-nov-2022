console.log("Before");

getUser(1000, (user) => {
  console.log("User:", user);

  getRepositories(user.githubId, (repos) => {
    repos.forEach((repo) => console.log(repo));
  });
});

console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Loading data from database .....");
    const user = { id: 1000, githubId: "codewithz" };
    callback(user);
  }, 3000);
}

function getRepositories(githubId, callback) {
  setTimeout(() => {
    console.log(`Calling http://github.com/${githubId} ....`);
    const repos = ["repo1", "repo2", "repo3"];
    callback(repos);
  }, 4000);
}

// function displayUser(user) {
//   console.log("User:", user);
// }

function displayRepos(repos) {
  repos.forEach((repo) => console.log(repo));
}
