module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    ...(process.env.NODE_ENV === 'production'
      ? {
          externals: {
            'vuetify/lib': 'vuetify/lib',
          },
        }
      : {}),
  },
};
