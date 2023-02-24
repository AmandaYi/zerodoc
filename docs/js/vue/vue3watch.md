# vue3watch的value问题

```js
setup(){
	
  let name = ref(0);
  // 这种不需要写name.value，因此watch发现是ref后，其实是监听的RefImpl，
  // 因此当value基本类型改变后，就能监听到。
  watch(name, ()=> {
  
  });

  let obj = ref({
    a: 1,
    innerObj: {
       b: 1
    }
  });
  // 如果这么监听的话，是无法监听到obj1的任何变化。
  // 原因是，因为obj1用ref包裹后，虽然底层是reactive二次封装，
  // 但是对于obj1而言，最后是RefImpl实例，因此RefImple中的value是Proxy引用地址，
  // 对于Proxy的内部变化，watch是无法拿到，因为watch发现，
  // 自己监听的ref，认为ref的值是基本类型，
  // 所以才不会深度循环监听，因此两种解决方案，第一是，追加参数deep:true,
  // 第二是，直接指向obj1.value,这样子当watch发现是Proxy后，
  // 又会按照reactive的监听逻辑，进行深度监听。
  watch(obj, () => {
    
  },{
    deep: true
  })

  watch(obj.innerObj, () => {
    
  })
}
```
