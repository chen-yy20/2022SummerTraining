import _ from 'lodash';
// import './style.css';
function component() {
    var element = document.createElement('div');
  
    // false: Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // true： Lodash 现在已经被直接import
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
    return element;
  }
  
  document.body.appendChild(component());