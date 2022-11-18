console.log("---------------Async Await Solution------------------------");

console.log("Before");

async function displayRepos(){
    try{
    const user=await getUser(1000);
    console.log("User:",user);
    const repos=await getRepositories(user.githubId)
    repos.forEach((repo)=>console.log(repo));
    }
    catch(error){
        console.log(error);
    }
}

console.log("After");

displayRepos()


// ----------------------------------------------------------------
function getUser(id) {
  const p = new Promise((resolve, reject) => {
    // ---- Async task starts here---------
    setTimeout(() => {
      console.log("Loading data from database .....");
      const user = { id: id, githubId: "codewithz" };
    //   resolve(user);
    reject("Rejected from getUser")
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
      resolve(repos);
    //  reject("Rejected from getRepo")
    }, 4000);
  });
  return p;
}
