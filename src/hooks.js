import {minify} from 'html-minifier'
import {prerendering} from '$app/env'

const { NODE_ENV} = process.env;

const min_opts = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    decodeEntities: true,
    html5: true,
    ignoreCustomComments: [/^#/],
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true
}

export async function handle({ request, render}) {
    if(request.headers['x-forwarded-proto'] === 'https' || NODE_ENV === 'development'){} 
    else {
        return {
            headers: {Location: `https://${req.host}${req.path}`},
            status: 301
        }
    }

    const response = await render(request)
    if(prerendering && response.headers['content-type'] === 'text/html') {
        response.body = minify(response.body, min_opts)
    }
    return response
}
