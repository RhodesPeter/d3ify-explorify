const pageContent = {
  homepage: {
    title: 'D3ify Explorify',
    links: [
      { link: '/basic-example', text: 'basic example' },
      { link: '/basic-example-real-data', text: 'basic example real data' },
      { link: '/basic-pie', text: 'basic pie chart' },
      { link: '/interactive-pie', text: 'interactive-pie chart' },
    ],
  },
  basicExample: {
    title: 'Bar chart made from an array on numbers',
  },
  basicExampleRealData: {
    title: 'Number of verified vs. unverified teachers',
    data: null,
  },
  basicPie: {
    title: 'Which year our teachers signed up',
    data: null,
  },
  interactivePie: {
    title: 'Number of signups per country as a percentage of total',
    controls: [
      { text: 2016, class: 'radio radio--2016', id: 'radio--2016' },
      { text: 2017, class: 'radio radio--2017', id: 'radio--2017' },
      { text: 2018, class: 'radio radio--2018', id: 'radio--2018' },
    ],
    data: null,
  },
};

module.exports = pageContent;
