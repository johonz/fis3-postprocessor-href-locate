# fis3-postprocessor-href-locate-z

A postprocessor plugin for fis3 to locate **href** attribute on **a** tag

## fis-conf.js
```javascript
fis.match('*.{tpl,html}', {
    postprocessor: fis.plugin('href-locate-z',{})
})
```
