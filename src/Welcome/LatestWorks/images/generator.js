const ProportionalCutterResizer = require('js-helper-methods/imageMethods/ProportionalCutterResizer.js')

module.exports = {
    generate() {
        const imageCreator = new ProportionalCutterResizer()
        const imageSizes = [
            292, // 320px
            347, // 375px
            397, // 425px
            380, // 768px
            210, // 1024px
            355, // 1440px
            355, // 2550px
        ]

        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/dentist.jpg', 
            imageSizes,
            'public/images/latestWorks/dentist'
        )
        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/ediWheel.jpg', 
            imageSizes,
            'public/images/latestWorks/ediWheel'
        )
        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/electrician.jpg', 
            imageSizes,
            'public/images/latestWorks/electrician'
        )
        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/fruits.jpg', 
            imageSizes,
            'public/images/latestWorks/fruits'
        )
        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/learningLanguages.jpg', 
            imageSizes,
            'public/images/latestWorks/learningLanguages'
        )
        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/travel.jpg', 
            imageSizes,
            'public/images/latestWorks/travel'
        )
        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/webshop.jpg', 
            imageSizes,
            'public/images/latestWorks/webshop'
        )
        imageCreator.createResponsiveVersions(
            'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/wildNature.jpg', 
            imageSizes,
            'public/images/latestWorks/wildNature'
        )
    }
}