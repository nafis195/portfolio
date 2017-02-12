window.onload = function onLoad() {
	//html
    var xt_html = new ProgressBar.Circle(html, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 10 },
  to: { color: '#e67e22', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+'%<br/>HTML');
    }

  }
});
xt_html.text.style.fontFamily = '"Roboto", Helvetica, sans-serif';
xt_html.text.style.fontSize = '25px';

xt_html.animate(0.75);  // Number from 0.0 to 1.0


//css

var xt_css = new ProgressBar.Circle(css, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 10 },
  to: { color: '#2ecc71', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+'%<br/>CSS');
    }

  }
});
xt_css.text.style.fontFamily = '"Roboto", Helvetica, sans-serif';
xt_css.text.style.fontSize = '25px';

xt_css.animate(0.75);

//js

var xt_js = new ProgressBar.Circle(js, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 10 },
  to: { color: '#f1c40f', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+'%<br/>JS');
    }

  }
});
xt_js.text.style.fontFamily = '"Roboto", Helvetica, sans-serif';
xt_js.text.style.fontSize = '25px';

xt_js.animate(0.75);

//php

var xt_php = new ProgressBar.Circle(php, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 10 },
  to: { color: '#3498db', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+'%<br/>PHP');
    }

  }
});
xt_php.text.style.fontFamily = '"Roboto", Helvetica, sans-serif';
xt_php.text.style.fontSize = '25px';

xt_php.animate(0.75);

//mysql

var xt_mysql = new ProgressBar.Circle(mysql, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 10 },
  to: { color: '#f39c12', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+'%<br/>MySql');
    }

  }
});
xt_mysql.text.style.fontFamily = '"Roboto", Helvetica, sans-serif';
xt_mysql.text.style.fontSize = '25px';

xt_mysql.animate(0.75);

//angular

var xt_angular = new ProgressBar.Circle(angular, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 10 },
  to: { color: '#e74c3c', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+'%<br/>Angular');
    }

  }
});
xt_angular.text.style.fontFamily = '"Roboto", Helvetica, sans-serif';
xt_angular.text.style.fontSize = '25px';

xt_angular.animate(0.75);
};