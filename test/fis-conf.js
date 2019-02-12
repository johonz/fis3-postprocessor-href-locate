fis.match('*.html',{
    release : '/public/$0'
})

fis.match('*.{tpl,html}', {
    postprocessor: fis.plugin('href-locate-z',{})
})

