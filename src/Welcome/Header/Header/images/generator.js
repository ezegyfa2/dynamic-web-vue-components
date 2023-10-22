const ProportionalCutterResizer = require('js-helper-methods/imageMethods/ProportionalCutterResizer.js')

module.exports = {
    generate() {
        const imageCreator = new ProportionalCutterResizer()
        const imageSizes = [
            { width: 320, height: 600 }, // 320px
            { width: 375, height: 600 }, // 375px
            { width: 425, height: 600 }, // 425px
            { width: 768, height: 680 }, // 768px
            { width: 1024, height: 832 }, // 1024px
            { width: 1440, height: 960 }, // 1440px
            { width: 2550, height: 1700 }, // 2550px
        ]

        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/Header/Header/images/background.jpg', 
            imageSizes,
            'node_modules/dynamic-web-vue-components/src/Welcome/Header/Header/images'
        )
    }
}