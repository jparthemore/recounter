/* jshint esversion: 6*/

const MyCounter ={

  //rootElement: '#app',
  myCount:0,

  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function(){
    //this.root= document.querySelector('#app');
    this.btn = document.querySelector('#increment');
    this.outpt = document.querySelector('#output');
  },

  bindEvents: function(){
    this.btn.addEventListener('click',()=>{
      this.myCount += 1;
      this.render();
      });
  },

  render: function(){
    this.outpt.textContent = this.myCount;
  }

};
MyCounter.start();
