var fs = require('fs')
let md = ''

function Header(){
  let m = `## My Website: [m4r.sh](https://m4r.sh)\n`
  return m;
}

let Badge = {
  install: (lib) => `<a href="https://packagephobia.com/result?p=${lib}"><img src="https://badgen.net/packagephobia/install/${lib}" alt="install size" /></a>`,
  brotli: (lib) => `<a href="https://bundlephobia.com/result?p=${lib}"><img src="https://badgen.net/badgesize/brotli/MarshallCB/${lib}/main/es.js?compression=brotli" alt="brotli size" /></a>`
}

function LibraryTable(libraries){
  let m = `|  Library 	| Description  |\n|:---:|:---	|\n`;
  libraries.forEach(({ name, badges }) => {
    let { description, repository } = require(`../${name}/package.json`)
    let repo = repository.url.replace('git+','').replace('.git','')
    let repo_id = repo.replace("https://github.com/","")
    console.log(repo_id)
    m += `| <a href="${repo}"><img src="${repo}/raw/main/meta/${name}.png" width="30" height="30"></a><br/>[**\`${name}\`**](${repo})| ${description}<br/><br/>${badges.map( type => Badge[type](name) )} 	|\n`
  })
  return m;
}



md += Header()
md += LibraryTable([
  {
    name: "routo",
    badges: ['install']
  },
  {
    name: "hueman",
    badges: ['brotli']
  },
  {
    name: "dotz",
    badges: ['brotli']
  },
  {
    name: "themepark",
    badges: ['brotli']
  },
  {
    name: "watches",
    badges: ['install']
  }
])

fs.writeFileSync('./README.md', md)
console.log("Done")