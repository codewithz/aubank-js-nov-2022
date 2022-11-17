// method --> object
// function --> globalThis(window,global)

const video = {
  title: "JavaScript in 30 mins",
  play() {
    console.log(this);
  },
};

video.play();

function someOhterFunction() {
  console.log("Inside a function-- directly inside the program");
  console.log(this);
}

someOhterFunction();

function Circle() {
  console.log("Inside Circle Function");
  console.log(this);
}

const c = new Circle();

const otherVideo = {
  title: "JavaScript in 30 mins",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(this.title, "-", tag);
      console.log(this);
    }, self);
  },
  play() {
    console.log(this);
  },
};

otherVideo.showTags();
otherVideo.play();
