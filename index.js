const feelings = [
  {
    name: "Happy",
    emoji: "😊",
  },
  {
    name: "Afraid",
    emoji: "😧",
  },
  {
    name: "Sad",
    emoji: "😟",
  },
  {
    name: "Disgusted",
    emoji: "😝",
  },
  {
    name: "Angry",
    emoji: "😠",
  },
].sort(() => Math.random() - 0.5);

const objects = [
  {
    name: "Happy",
    emoji: "🌋",
  },
  {
    name: "Afraid",
    emoji: "🕷️",
  },
  {
    name: "Sad",
    emoji: "🐱",
  },
  {
    name: "Disgusted",
    emoji: "💩",
  },
  {
    name: "Angry",
    emoji: "🤼",
  },
].sort(() => Math.random() - 0.5);

document.querySelector("#feelings").innerHTML = feelings
  .map(
    (feeling) =>
      `<button data-turned="false" data-selected="false" data-name="${feeling.name}" data-emoji="${feeling.emoji}">❓</button>`
  )
  .join("");

document.querySelector("#objects").innerHTML = objects
  .map(
    (object) =>
      `<button data-turned="false" data-selected="false" data-name="${object.name}" data-emoji="${object.emoji}">❓</button>`
  )
  .join("");

document.querySelectorAll("#feelings button").forEach((button) => {
  button.addEventListener("click", () => {
    if (!document.querySelector("#feelings button[data-selected=true]")) {
      button.dataset.selected = "true";
      button.dataset.turned = "true";
      button.innerHTML = button.dataset.emoji;
      const selectedObject = document.querySelector(
        "#objects button[data-selected=true]"
      );
      if (selectedObject) {
        if (selectedObject.dataset.name === button.dataset.name) {
          button.dataset.selected = "false";
          selectedObject.dataset.selected = "false";
        } else {
          setTimeout(() => {
            selectedObject.dataset.selected = "false";
            selectedObject.dataset.turned = "false";
            selectedObject.innerHTML = "❓";
            button.dataset.selected = "false";
            button.dataset.turned = "false";
            button.innerHTML = "❓";
          }, 1000);
        }
      }
    }
  });
});

document.querySelectorAll("#objects button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.selected === "true") {
      return;
    }
    if (!document.querySelector("#objects button[data-selected=true]")) {
      button.dataset.selected = "true";
      button.dataset.turned = "true";
      button.innerHTML = button.dataset.emoji;
      const selectedFeeling = document.querySelector(
        "#feelings button[data-selected=true]"
      );
      if (selectedFeeling) {
        if (selectedFeeling.dataset.name === button.dataset.name) {
          button.dataset.selected = "false";
          selectedFeeling.dataset.selected = "false";
        } else {
          setTimeout(() => {
            selectedFeeling.dataset.selected = "false";
            selectedFeeling.dataset.turned = "false";
            selectedFeeling.innerHTML = "❓";
            button.dataset.selected = "false";
            button.dataset.turned = "false";
            button.innerHTML = "❓";
          }, 1000);
        }
      }
    }
  });
});
