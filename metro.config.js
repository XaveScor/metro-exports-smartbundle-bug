module.exports = {
  resolver: {
    unstable_enablePackageExports: true,
    extraNodeModules: {
      "test-lib": "test-lib",
    },
  },
  watchFolders: ["test-lib"],
};
