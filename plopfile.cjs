module.exports = function (plop) {
  plop.setGenerator("radar", {
    description: "radar",
    prompts: [
      {
        type: "input",
        name: "artifact",
        message: "radar artifact",
      },
      {
        type: "input",
        name: "title",
        message: "title",
      },
      {
        type: "input",
        name: "ring",
        message: "ring - adopt|trial|assess|hold",
      },
      {
        type: "input",
        name: "quadrant",
        message:
          "quadrant - languages-and-frameworks|methods-and-patterns|platforms-and-aoe-services|tools",
      },
      {
        type: "input",
        name: "tags",
        message: "tags - ",
      },
    ],
    actions: [
      {
        type: "add",
        path: "radar/{{{today}}}/{{artifact}}.md",
        templateFile: "templates/radar.hbs",
        abortOnFail: false,
        skipIfExists: true,
        force: true,
      },
    ],
  });
  plop.setGenerator("article", {
    description: "article",
    prompts: [
      {
        type: "input",
        name: "charpter",
        message: "charpter please",
      },
      {
        type: "input",
        name: "article",
        message: "article please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "docs/{{charpter}}/{{article}}.md",
        templateFile: "templates/article.hbs",
        abortOnFail: false,
        skipIfExists: true,
        force: true,
      },
    ],
  });
  plop.setHelper("double-quotes", function (line) {
    return line.replaceAll('"', "");
  });
  plop.setHelper("today", function () {
    var today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2);
    console.log(date);
    return date;
  });
};
