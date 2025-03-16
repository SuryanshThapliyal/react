function CustomRender(reactElement, mainContainer){
    // const domEle= document.createElement(reactElement.type)
    // // domEle.setAttribute('type', reactElement.type)
    // domEle.setAttribute('href', reactElement.props.href)
    // domEle.setAttribute('target', reactElement.props.target)
    // domEle.innerHTML=reactElement.children
    // mainContainer.appendChild(domEle)
    const domele=document.createElement(reactElement.type)
    domele.innerHTML= reactElement.children
    for (const prop in reactElement.props) {
            domele.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domele)
}
const reactElement={
    type: 'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children:'Click me to visit Google'
}

const mainContainer =document.getElementById('root')
CustomRender(reactElement, mainContainer)