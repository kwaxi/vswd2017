var Deck = require('kittik');
var Cmd = require('node-cmd');

Deck.create({
  shapes: [
    {
      name: 'vswd2017',
      type: 'Text',
      options: {
        text: 'VÖSI Software Day 2017',
        font: 'Star Wars',
        x: "right",
        y: "bottom",
        foreground: "white",
        background: "black"
      }
    },
    {
      name: 'coderdojo',
      type: 'Text',
      options: {
        text: '@daniel_wagn3r / VERBUND, CoderDojo Wien',
        font: 'Star Wars',
        x: "left",
        y: "bottom",
        foreground: "white",
        background: "black"
      }
    }
  ],
  animations: [
    {
      name: 'PrintFast',
      type: 'Print',
      options: {
        duration: 250
      }
    },
    {
      name: 'PrintSlow',
      type: 'Print',
      options: {
        duration: 2000
      }
    },
    {
      name: 'FocusX',
      type: 'Focus',
      options: {
        direction: 'shakeX',
        duration: 500
      }
    },
    {
      name: 'FocusY',
      type: 'Focus',
      options: {
        direction: 'shakeY',
        duration: 500
      }
    },
    {
      name: 'Slide In Left',
      type: 'Slide',
      options: {
        direction: 'inLeft',
        duration: 1000
      }
    },
    {
      name: 'Slide In Right',
      type: 'Slide',
      options: {
        direction: 'inRight',
        duration: 1000
      }
    },
    {
      name: 'Slide In Down',
      type: 'Slide',
      options: {
        direction: 'inDown',
        duration: 1000
      }
    },
    {
      name: 'Slide In Up',
      type: 'Slide',
      options: {
        direction: 'inUp',
        duration: 1000
      }
    }
  ],
  slides: [
    // 
    // Filling the gap
    //
    {
      shapes: [
        {
          name: 'headline',
          type: 'FigText',
          options: {
            text: 'Events',
            font: "Computer",
            x: 5,
            y: 5,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'coderdojo2',
          type: 'FigText',
          options: {
            text: 'CoderDojo @ VERBUND',
            font: "Big",
            x: 25,
            y: 15,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'parktour',
          type: 'FigText',
          options: {
            text: 'Codeweek Parktour',
            font: "Big",
            x: 25,
            y: 25,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'ideas',
          type: 'FigText',
          options: {
            text: '. . . ? ? ?',
            font: "Big",
            x: 25,
            y: 35,
            background: 'black',
            foreground: 'green'
          }
        }
      ],
      animations: [
        {
          name: 'FocusY',
          type: 'Focus',
          options: {
            direction: 'shakeY',
            duration: 500
          }
        }
      ],
      order: [
        'vswd2017',
        'coderdojo',
        'headline::Slide In Right',
        'coderdojo2::PrintSlow',
        'parktour::PrintSlow',
        'ideas::PrintSlow'
      ]
    },
    // 
    // What's needed
    //
    {
      shapes: [
        {
          name: 'headline',
          type: 'FigText',
          options: {
            text: 'We want you!',
            font: "Computer",
            x: 5,
            y: 5,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'childen',
          type: 'FigText',
          options: {
            text: 'Kinder die teilnehmen',
            font: "Big",
            x: 25,
            y: 15,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'mentors',
          type: 'FigText',
          options: {
            text: 'Mentoren die mitarbeiten',
            font: "Big",
            x: 25,
            y: 25,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'sponsors',
          type: 'FigText',
          options: {
            text: 'Sponsoren die unterstützen',
            font: "Big",
            x: 25,
            y: 35,
            background: 'black',
            foreground: 'green'
          }
        }
      ],
      animations: [
        {
          name: 'FocusY',
          type: 'Focus',
          options: {
            direction: 'shakeY',
            duration: 500
          }
        }
      ],
      order: [
        'vswd2017',
        'coderdojo',
        'headline::Slide In Right',
        'childen::PrintSlow',
        'mentors::PrintSlow',
        'sponsors::PrintSlow'
      ]
    },
    // 
    // Goal
    //
    {
      shapes: [
        {
          name: 'headline',
          type: 'FigText',
          options: {
            text: 'Goal',
            font: "Computer",
            x: 5,
            y: 5,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'interesse',
          type: 'FigText',
          options: {
            text: 'Interesse an IT',
            font: "Big",
            x: 25,
            y: 15,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'verstaendnis',
          type: 'FigText',
          options: {
            text: 'Verständnis für IT',
            font: "Big",
            x: 25,
            y: 25,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'natives',
          type: 'FigText',
          options: {
            text: 'Coding Natives',
            font: "Big",
            x: 25,
            y: 35,
            background: 'black',
            foreground: 'green'
          }
        }
      ],
      animations: [
        {
          name: 'FocusY',
          type: 'Focus',
          options: {
            direction: 'shakeY',
            duration: 500
          }
        }
      ],
      order: [
        'vswd2017',
        'coderdojo',
        'headline::Slide In Right',
        'interesse::PrintSlow',
        'verstaendnis::PrintSlow',
        'natives::PrintSlow'
      ]
    },
    // 
    // Thanks
    //
    {
      shapes: [
        {
          name: 'headline',
          type: 'FigText',
          options: {
            text: 'Thanks!',
            font: "Computer",
            x: 5,
            y: 5,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'url',
          type: 'FigText',
          options: {
            text: 'wien.coderdojo.net',
            font: "Doom",
            x: 25,
            y: 25,
            background: 'black',
            foreground: 'green'
          }
        }
      ],
      animations: [
        {
          name: 'FocusY',
          type: 'Focus',
          options: {
            direction: 'shakeY',
            duration: 500
          }
        }
      ],
      order: [
        'vswd2017',
        'coderdojo',
        'headline::Slide In Right',
        'url::PrintSlow',
      ]
    }  ]
}).run(); 