import packageJson from '../package.json'

const { dependencies: deps } = packageJson as {
  dependencies?: Record<string, string>
}

export const dependencies = deps || {}

export const externals = Object.keys(dependencies).reduce<
  Record<string, string>
>((acc, cur) => {
  acc[cur] = `commonjs ${cur}`

  return acc
}, {})

export const distPackageJson = JSON.stringify({ dependencies })
