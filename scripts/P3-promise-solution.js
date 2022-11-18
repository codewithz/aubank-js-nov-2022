// const p = new Promise((resolve, reject) => {
//   //Kick off some async task
//   setTimeout(() => {
//     console.log("Some Async Task here ...............");
//     // resolve(1);
//     reject(new Error("DB Server Down.."));
//   }, 3000);
// });

// p.then((result) => {
//   console.log("Output from Promise Resolved:", result);
// }).catch((error) => {
//   console.log("Output from Promise Rejected:", error);
// });

console.log("---------------Promise Solution------------------------");

console.log("Before");

const p = getUser(1000);

p
.then((user) => {
    console.log("User:",user);
    return getRepositories(user.githubId);
})
.then(
    (repos)=>{
        repos.forEach((repo)=>console.log(repo));
    }
)
.catch((error)=>{
    console.log("Error:",error);
})

console.log("After");

function getUser(id) {
  const p = new Promise((resolve, reject) => {
    // ---- Async task starts here---------
    setTimeout(() => {
      console.log("Loading data from database .....");
      const user = { id: id, githubId: "codewithz" };
      resolve(user);
    // reject("Rejected from getUser")
    }, 3000);
    // ---- Async task ends here---------
  });

  return p;
}

function getRepositories(githubId) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Calling http://github.com/${githubId} ....`);
      const repos = ["repo1", "repo2", "repo3"];
    //   resolve(repos);
     reject("Rejected from getRepo")
    }, 4000);
  });
  return p;
}
