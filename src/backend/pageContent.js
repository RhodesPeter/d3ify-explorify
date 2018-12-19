const pageContent = {
  homepage: {
    title: 'D3ify Explorify',
    links: [
      { link: '/basic-example', text: 'basic example' },
      { link: '/basic-example-real-data', text: 'basic example real data' },
      { link: '/basic-pie', text: 'basic pie chart' },
    ],
  },
  basicExample: {
    title: 'Bar chart made from an array on numbers',
    breadcrumb: true,
  },
  basicExampleRealData: {
    title: 'Number of verified vs. unverified teachers',
    breadcrumb: true,
    data: null,
  },
  basicPie: {
    title: 'Which year our teachers signed up',
    breadcrumb: true,
    data: null,
  },
};

module.exports = pageContent;
