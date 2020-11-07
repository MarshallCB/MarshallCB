var fs = require('fs')
let md = ''

function Header(){
  let m = `## My Website: [m4r.sh](https://m4r.sh)\n`
  return m;
}

function LibraryTable(libraries){
  let m = `|  Library 	| Description  |\n|:---:|:---	|\n`;
  libraries.forEach(lib => {
    let { description, repository } = require(`../${lib}/package.json`)
    let repo = repository.url.replace('git+','').replace('.git','')
    m += `| <a href="${repo}"><img src="${repo}/raw/main/${lib}.png" width="40" height="40"></a><br/>[\`${lib}\`](${repo})| ${description}<br/><br/><img src="https://badgen.now.sh/npm/v/${lib}" alt="version" /> 	|\n`
  })
  return m;
}


md += Header()
md += LibraryTable(["routo", "hueman", "ctex", "themepark", "jeye"])

fs.writeFileSync('./README.md', md)
console.log("Done")