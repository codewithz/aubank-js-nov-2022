function playVideo(a, b) {
  console.log(this);
  console.log(a, "-", b);
}

playVideo();
console.log("-------------------------------");
playVideo.call({ name: "Z" }, 1, 2);
console.log("-------------------------");
playVideo.apply({ name: "N" }, [1, 2]);
console.log("-----------------------");
const fn = playVideo.bind({ name: "M" });
fn(3, 4);

console.log("---------------------------------------");

const anotherVideo = {
  title: "Java in 30 mins",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, "-", tag);
      console.log(this);
    });
  },
  play() {
    console.log(this);
  },
};

anotherVideo.showTags();
