const ProportionalCutterResizer = require('js-helper-methods/imageMethods/ProportionalCutterResizer.js')

module.exports = {
    generate() {
        const imageCreator = new ProportionalCutterResizer()
        const imageSizes = [
            272, // 320px
            327, // 375px
            377, // 425px
            720, // 768px
            609, // 1024px
            772, // 1440px
            814, // 2550px
        ]

        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/Articles/Description/images/easyToModify.jpg', 
            imageSizes,
            'public/images/articles/easyToModify'
        )
        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/Articles/Description/images/hostingMaintenance.jpg', 
            imageSizes,
            'public/images/articles/hostingMaintenance'
        )
        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/Articles/Description/images/modernAestheticDesign.jpg', 
            imageSizes,
            'public/images/articles/modernAestheticDesign'
        )
    }
}