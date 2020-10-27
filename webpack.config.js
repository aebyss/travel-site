const path = require("path")

const postCSSPlugins = [
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer")
]

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app")
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader?url=false",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [

                                    //require("postcss-import"),
                                    //require("postcss-mixin
                                    require("postcss-simple-vars"),
                                    require("postcss-nested"),
                                    require("autoprefixer")

                                ]
                            }
                        }
                    }
                ]
            }
        ]
    }
}