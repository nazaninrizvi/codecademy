const results  URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`${type}, ${value}`)
    resultsList.append(document.createElement('br'))
})