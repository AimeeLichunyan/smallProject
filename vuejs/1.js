// vue 的特点，使用的是 object.definProperty
// 不支持数组，会把数组的方法重写
function render() {
    console.log('视图渲染')
}
let obj = {
    name: 'laodi',
    location: {x:100,y:100}
}
let obj1 = [1,2,3];
let arrayProto = Array.prototype;
let proto = Object.create(arrayProto);
methods.forEach(method => {
    proto[method] = function() {
        render();
        arrayProto[method].call(this,...arguments)
    }
})
function observer(obj) { //把所有的属性定义成get/set的方法
    if(Array.isArray(obj)) {
        obj.__proto__ = proto
        return
    }
    if(typeof obj == 'object') {
        for(let key in obj) {
            defineReactive(obj,key,obj[key]); // 重新定义obj
        }
    }
}
// 相当于是闭包
function defineReactive(data,key,value) {
    observer(value) // 解决只能遍历第一层对象的问题
    Object.defineProperty(data,key,{
        get() {
            return value
        },
        set(newValue) {
            if(value != newValue) {
                observer(value) // 解决修改时传入的参数是对象
                render()
                value = newValue
            }  
        }
    })
}
observer(obj)
obj.a = 100; // 添加新的属性时，不会触发执行
// 1. vue新增属性不会被监听 可以使用$set;
// 如果想给一个对象加不存在的属性，obj.location = {...obj.location,a:1}
function $set(data,key,value) {
    defineReactive(data,key,value)
}
$set(obj,'a',1)
obj.a = 100;