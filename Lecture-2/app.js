  const createElement = function(tagName, attributes = {}, fillers=''){
    let finalfiller = '';
    let output;
    if (Array.isArray(fillers)) {
        fillers.forEach((filler)=>{finalFiller+=filler});
    } else {
      finalFiller = fillers;
    }
    if (finalFiller==='') {
      output = `<${tagName}/>`;
    } else {
      output = `
        <${tagName} >
          ${finalFiller}
        </${tagName}>
      `;
    }
      console.log(Array.isArray(fillers));
      return output;
  };


 const render = function(renderBody, placeholder){
   placeholder.innerHTML = renderBody;
 }



const React = {
  createElement,
  render,
}


const app =
    React.createElement('div', { style: { backgroundColor: 'red' } }, [
      React.createElement('span', undefined, 'Hello world'),
      React.createElement('br'),
      'This is just a text node',
      React.createElement('div', { textContent: 'Text content' })
  ]);



React.render(
  app,
  document.getElementById('root'),
);
