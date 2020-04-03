function vue() {
    this.$data = {a:1};
    this.dom = document.getElementById('app');
    this.virtualDom = '';
    this.observer(this.$data);
    this.render();
}
// 注册监听 -- 发布者
vue.prototype.observer = function(obj) {
    var value;
    var self = this;
    for(var key in obj) {
        value = obj[key]
        if(typeof value === 'object') {
            this.observer()
        }else {
            Object.defineProperty(obj,key,{
                get: function() {
                    return value;
                },
                set: function(newValue) {
                    value = newValue;
                    self.render();
                }
            })
        }
    }
}

// 更新--订阅者
vue.prototype.render = function() {
    this.virtualDom = 'i am ' + this.$data.a;
    this.dom.innerHTML = this.virtualDom;
}

// 数组怎么办
/*push方法
shift方法*/