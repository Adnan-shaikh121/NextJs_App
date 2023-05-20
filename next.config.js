module.exports = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/login',
        permanent: true,
      },
    ];
  },
};
