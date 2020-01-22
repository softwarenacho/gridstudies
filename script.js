start();

function start() {
  let div = document.getElementsByTagName('div')[0];
  div.innerHTML = '';
  let height = random(3, 12);
  let width = random(2, 9);
  let heights = generateValues(height);
  let widths = generateValues(width);

  height = heights.length;
  width = widths.length;

  div.style["grid-template-columns"] = widths.join('fr ') + 'fr';
  div.style["grid-template-rows"] = heights.join('fr ') + 'fr';

  for (var x = 0; x < heights.length; x++) {
    let padding = height >= width ? random(width, height) : random(height, width);
    for(var y = 0; y < widths.length; y++) {
      let item = createItem(div, padding);
      div.appendChild(item);
    }
  }
}

function createItem(div, padding) {
  // const Colors = ['aquamarine', 'chocolate', 'coral', 'crimson', 'gainsboro', 'gold', 'green', 'indigo', 'lavander', 'moccasin', 'orange', 'olive', 'plum', 'tan', 'teal', 'wheat', 'whitesmoke']
  const Colors = ['#CDDCD7', '#96B0AB', '#B08670', '#DCC6B7', '#EBD198', '#80706D', '#F8F3DF', '#CBB6D6', '#AFC76F', '#5C2A44', '#DEC043', '#EAE180', '#8CE7BB', '#62B892', '#71A297', '#A3CFC2', '#CAF0D1', '#D58A64', '#744841', '#BC8D81', '#FDDDC6', '#F7C7A7', '#63735F', '#E894C9']
  let pre = document.createElement('pre');
  let outside_color = Colors[Math.floor(Math.random() * Colors.length)];
  pre.style["background-color"] =  outside_color;
  pre.style["padding"] = padding + 'px';
  let inside_div = document.createElement('div')
  let inside_color = Colors[Math.floor(Math.random() * Colors.length)];
  inside_div.style["background-color"] =  inside_color;
  inside_div.className += "item";
  pre.appendChild(inside_div);
  return pre;
}

function generateValues(limit) {
  let values = [];
  let percentage = 100;
  for (i = 1; i <= limit; i++) {
    let w = 0;
    if (i == limit) {
      w = percentage;
    } else {
      let min = Math.floor(percentage / limit);
      let max = Math.floor(percentage / 2);
      w = random(min, max);
    }
    values.push(w);
    percentage = percentage - w;
  }
  return values.filter(v => v > 0);
}

function random(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) ) + min;
}
