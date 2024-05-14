module.exports = function (plop) {

    plop.setHelper('today', function () {
        var today = new Date();
        let date = ("0" + today.getDate()).slice(-2);
        console.log(date);
        return date;
    });

    plop.setGenerator('radar', {
      description: 'radar',
      prompts: [
        {
            type: 'input',
            name: 'radar',
            message: 'radar',
          },
        {
          type: 'input',
          name: 'title',
          message: 'title',
        },
        {
          type: 'input',
          name: 'ring',
          message: 'ring - adopt|trial|assess|hold',
        },
        {
          type: 'input',
          name: 'quadrant',
          message: 'quadrant - languages-and-frameworks|methods-and-patterns|platforms-and-aoe-services|tools',
        },
        {
            type: 'input',
            name: 'tags',
            message: 'tags - ',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'radar/{{{today}}}/{{artifact}}-{{version}}.md',
          templateFile: 'templates/radar.hbs',
          abortOnFail: false,
          skipIfExists: true,
          force: false,
        },
      ],
    });
    plop.setGenerator('article', {
      description: 'article',
      prompts: [
        {
          type: 'input',
          name: 'charpter',
          message: 'charpter please',
        },
        {
          type: 'input',
          name: 'article',
          message: 'article please',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'docs/{{charpter}}/{{article}}.md',
          templateFile: 'templates/article.hbs',
          abortOnFail: false,
          skipIfExists: true,
          force: false,
        },
      ],
    });
  };
  