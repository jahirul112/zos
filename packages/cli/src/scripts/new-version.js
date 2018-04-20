import PackageFilesInterface from '../utils/PackageFilesInterface'
import Logger from '../utils/Logger'

const log = new Logger('new-version')

async function newVersion(version, { network, from, packageFileName }) {
  if (version === undefined) {
    log.error('Must provide the new project version')
    return
  }

  const files = new PackageFilesInterface(packageFileName)
  const zosPackage = files.read()
  zosPackage.version = version
  zosPackage.contracts = {}
  files.write(zosPackage)
}

module.exports = newVersion