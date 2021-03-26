module.exports = {
    "presets": [
        "@babel/env",
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-transform-class-properties",
        ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }]
    ]
}