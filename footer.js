let logoObjects = [
    {
        url: 'https://www.linkedin.com/in/julian-addison-8b219a151/',
        path: 'linked.svg',
        alt: 'LinkedIn Logo'
    },
    {
        url: 'https://github.com/fjaddison/',
        path: 'github.svg',
        alt: 'Github Logo'
    }
]

let footer = document.createElement('footer')
footer.id = 'site-footer'

let logoBox = document.createElement('div')
logoBox.id = 'logo-box'

let logoLinks = logoObjects.map(lo => {
    let a = document.createElement('a')
    a.href = lo.url

    let brandLogo = document.createElement('img') 
    brandLogo.classList.add('footer-logo')
    brandLogo.src = lo.path
    brandLogo.alt = lo.alt
    a.appendChild(brandLogo)

    return a
})

logoLinks.forEach(l => logoBox.appendChild(l))

footer.appendChild(logoBox)

document.body.appendChild(footer)
