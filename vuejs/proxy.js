// Proxy实现数据的响应式变化，支持数组的变化，不用监听是数组还是对象,会有兼容性，支持则用 proxy，不支持则用Object.defineProperty
function render() {
    console.log('视图渲染')
}

let obj = {
    name: 'laodi',
    age: 18,
    arr:[]
}
let handler = {
    get(target,key) {
        // 如果内部的值是对象的话，就在继续数据劫持
        if(typeof target[key] == 'object' || target[key] == null) {
            return new Proxy(obj,handler);
        }
        return Reflect.get(target,key)
    },
    set(target,key,value) {
        console.log(target);
        console.log(key,value)
        render();
        return Reflect.set(target,key,value)
    }
} 
let proxy = new Proxy(obj,handler);
proxy.age.age = 100;
proxy.arr[0] = 100;
proxy.arr.push('1')