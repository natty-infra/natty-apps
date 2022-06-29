// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebPackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".jsx" ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                            ["@babel/typescript", { targets: "defaults" }],
                            ["@babel/preset-react", { targets: "defaults" }]
                        ],
                        plugins: ["transform-class-properties"]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.(woff(2)?|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.(glb|gltf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "models/"
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif|webp)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: "img/[hash]-[name].[ext]"
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            favicon: "./src/img/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    }
};