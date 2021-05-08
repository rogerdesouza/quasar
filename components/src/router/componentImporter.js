function componentFilePaths () {
  return require.context('pages/components', false, /\.vue$/)
}

function pathNames () {
  return componentFilePaths().keys().map(string => {
    return convertPathToName(string)
  })
}

function convertPathToName (pathString) {
  return pathString.substring(3).slice(0, -8)
}

function routes () {
  const paths = componentFilePaths().keys().map(componentPath => {
    return {
      path: convertPathToName(componentPath),
      component: () => import('src/pages/components/' + componentPath.substring(2))
    }
  })
  return paths
}

export default {
  getRoutes: routes,
  getPathNames: pathNames
}
