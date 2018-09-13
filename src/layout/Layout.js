import _ from 'lodash'
import Utils from '../util/Utils'

class Layout {
  constructor (config = {}) {
    if (config.hasOwnProperty('orientation') && _.isString(config.orientation)) {
      if (config.orientation.toUpperCase() == 'HORIZONTAL') { config.orientation = Layout.HORIZONTAL } else { delete config.orientation }
    }
    Utils.initConfig(this, config)
  }

  layout (root, bounds) {}
  reset () {}
  destroy () {}
}
Layout.VERTICAL = 0
Layout.HORIZONTAL = 1

Layout.DEFAULTS = {
  orientation: Layout.VERTICAL
}

export default Layout
