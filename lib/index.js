$(function () {
  var ExplosionView = Backbone.View.extend({
    el: '#explosionView',
    events: {
      'click #explosionButton': 'explode'
    },
    initialize: function () {
      this.stage = new createjs.Stage('explosionCanvas');
      createjs.Ticker.addEventListener('tick', this.stage);
    },
    explode: function (e) {
      for (var i = 0; i < 20; i++) {
        var circle = new createjs.Shape();
        circle.graphics.f('gray').dc(0, 0, 40);
        circle.x = Math.random() * this.stage.canvas.width;
        circle.y = Math.random() * this.stage.canvas.height;
        createjs.Tween.get(circle).to({scaleX:0, scaleY:0}, 400).call(this.afterExplode, [circle], this);
        this.stage.addChild(circle);
      }
      for (var i = 0; i < 20; i++) {
        var circle = new createjs.Shape();
        circle.graphics.f('orange').dc(0, 0, 40);
        circle.x = Math.random() * this.stage.canvas.width;
        circle.y = Math.random() * this.stage.canvas.height;
        createjs.Tween.get(circle).to({scaleX:0, scaleY:0}, 400).call(this.afterExplode, [circle], this);
        this.stage.addChild(circle);
      }
    },
    afterExplode: function (circle) {
      this.stage.removeChild(circle);
    }
  });
  var view = new ExplosionView();
});