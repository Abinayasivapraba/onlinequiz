import { NgxUiLoaderConfig, SPINNER } from "ngx-ui-loader";

export const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    fgsType: SPINNER.threeBounce,
    fgsColor: '#007bff'
}

export const Quiz = [
    {
        id: 1,
        question: '1. What does HTML stand for?',
        option: [
            { optionid: 1, name: 'Hypertext Machine language', selected: false},
            { optionid: 2, name: 'Hypertext and links markup language', selected: false},
            { optionid: 3, name: 'Hypertext Markup Language', selected: false},
            { optionid: 4, name: 'Hightext machine language.', selected: false}
        ],
    },
    {
        id: 2,
        question: '2. Which of the following HTML Elements is used for making any text bold ?',
        option: [
            { optionid: 1, name: '<p>', selected: false},
            { optionid: 2, name: '<i>', selected: false},
            { optionid: 3, name: '<li>', selected: false},
            { optionid: 4, name: '<b>', selected: false}
        ],
    },
    {
        id: 3,
        question: '3. Which of the following attributes is used to add link to any element?',
        option: [
            { optionid: 1, name: 'link', selected: false},
            { optionid: 2, name: 'ref', selected: false},
            { optionid: 3, name: 'href', selected: false},
            { optionid: 4, name: 'newref', selected: false}
        ],
    },
    {
        id: 4,
        question: '4. Select the smallest memory size',
        option: [
            { optionid: 1, name: 'kilobyte', selected: false},
            { optionid: 2, name: 'megabyte', selected: false},
            { optionid: 3, name: 'gigabyte', selected: false},
            { optionid: 4, name: 'terabyte', selected: false}
        ],
    },
    {
        id: 5,
        question: '5. What is the full form of IP?',
        option: [
            { optionid: 1, name: 'Internet program', selected: false},
            { optionid: 2, name: 'Internet protocol', selected: false},
            { optionid: 3, name: 'Interface program', selected: false},
            { optionid: 4, name: 'Interface protocol', selected: false}
        ],
    },
];