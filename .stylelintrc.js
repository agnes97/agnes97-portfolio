/** @type {import("stylelint").Config} */
const stylelintConfig = {
    "extends": ["stylelint-config-standard"],
    "customSyntax": "postcss-styled-syntax",
    "rules": {
        "media-query-no-invalid": null,
    },
}

export default stylelintConfig;