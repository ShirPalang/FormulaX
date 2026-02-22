const container = document.getElementById('root')

async function getPage(pageName) {
  try {
    const res = await fetch(`/assets/pages/${pageName}.html`)
    const page = res.text()

    return page
    
  } catch (err) {
    
  }
}

// container.insertAdjacentHTML("beforeend" , await getPage('feed'))