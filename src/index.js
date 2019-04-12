import _ from 'lodash';

import Logo from './react-icon.png';


function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello ', 'webpack'], '');
  element.classList.add('hello');

  // Add the image to our existing div.
  let reactLogo = new Image();
  reactLogo.src = Logo;

  element.appendChild(reactLogo);

  return element;
}

document.body.appendChild(component());
