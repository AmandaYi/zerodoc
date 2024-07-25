"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[8320],{3905:(t,n,e)=>{e.d(n,{Zo:()=>o,kt:()=>h});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=a.createContext({}),l=function(t){var n=a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):p(p({},n),t)),e},o=function(t){var n=l(t.components);return a.createElement(c.Provider,{value:n},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),u=l(e),m=r,h=u["".concat(c,".").concat(m)]||u[m]||k[m]||i;return e?a.createElement(h,p(p({ref:n},o),{},{components:e})):a.createElement(h,p({ref:n},o))}));function h(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,p=new Array(i);p[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=t,s[u]="string"==typeof t?t:r,p[1]=s;for(var l=2;l<i;l++)p[l]=e[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},5188:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=e(87462),r=(e(67294),e(3905));const i={},p="\u6570\u7ec4\u5b9e\u73b0\u6808",s={unversionedId:"structure/arrayStackImpl",id:"structure/arrayStackImpl",title:"\u6570\u7ec4\u5b9e\u73b0\u6808",description:"\u6808\u7528\u6570\u7ec4\u6765\u5b9e\u73b0\u3002\u4f7f\u7528\u6570\u7ec4\u65b9\u5f0f\u5b9e\u73b0\u7684\u6808\u53eb\u9759\u6001\u6808\u3002",source:"@site/docs/structure/arrayStackImpl.md",sourceDirName:"structure",slug:"/structure/arrayStackImpl",permalink:"/zerodoc/docs/structure/arrayStackImpl",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Structure",previous:{title:"\u6808\u539f\u7406",permalink:"/zerodoc/docs/structure/linear01"},next:{title:"\u5355\u94fe\u8868\u5b9e\u73b0\u6808",permalink:"/zerodoc/docs/structure/linkedListStackImpl"}},c={},l=[{value:"\u5982\u4e0bJAVA\u4ee3\u7801",id:"\u5982\u4e0bjava\u4ee3\u7801",level:2},{value:"\u6570\u7ec4\u5b9e\u73b0\u6808\u7684\u95ee\u9898",id:"\u6570\u7ec4\u5b9e\u73b0\u6808\u7684\u95ee\u9898",level:2},{value:"\u65b9\u6848\u4e00\u9650\u5236\u538b\u6808\u5f39\u6808",id:"\u65b9\u6848\u4e00\u9650\u5236\u538b\u6808\u5f39\u6808",level:2},{value:"\u65b9\u6848\u4e8c\u52a8\u6001\u6269\u5bb9",id:"\u65b9\u6848\u4e8c\u52a8\u6001\u6269\u5bb9",level:2},{value:"\u6570\u7ec4\u9759\u6001\u6808\u7684\u81ea\u52a8\u6269\u5bb9\u7f29\u51cf\uff08\u4e86\u89e3\uff09",id:"\u6570\u7ec4\u9759\u6001\u6808\u7684\u81ea\u52a8\u6269\u5bb9\u7f29\u51cf\u4e86\u89e3",level:3}],o={toc:l},u="wrapper";function k(t){let{components:n,...e}=t;return(0,r.kt)(u,(0,a.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u7ec4\u5b9e\u73b0\u6808"},"\u6570\u7ec4\u5b9e\u73b0\u6808"),(0,r.kt)("p",null,"\u6808\u7528\u6570\u7ec4\u6765\u5b9e\u73b0\u3002\u4f7f\u7528\u6570\u7ec4\u65b9\u5f0f\u5b9e\u73b0\u7684\u6808\u53eb\u9759\u6001\u6808\u3002 "),(0,r.kt)("h2",{id:"\u5982\u4e0bjava\u4ee3\u7801"},"\u5982\u4e0bJAVA\u4ee3\u7801"),(0,r.kt)("p",null,"\u5b9a\u4e49\u8981\u5b9e\u73b0\u7684\u63a5\u53e3\u7c7b\u4e3a\u4e86\u89c4\u8303\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface ZStack {\n    public void push(int t);\n\n    public int pop();\n\n    public int length();\n\n    public void list();\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ArrayStack implements ZStack {\n    // \u6700\u5927\u5bb9\u91cf\n    int maxStack = 0;\n    // \u7d22\u5f15\u6307\u9488\n    int top = -1;\n    // \u5b9a\u4e49\u4e00\u4e2a\u6808\n    int[] stack;\n\n    // \u6784\u9020\u5668\n    public ArrayStack(int maxStack) {\n        this.maxStack = maxStack;\n        this.stack = new int[maxStack];\n    }\n\n    // \u538b\u6808\n    public void push(int v) {\n        // \u538b\u6808\uff0c \u589e\u52a0\u6570\u636e\uff0c\u7d22\u5f15+1\uff0c\u7136\u540e\u5728\u7d22\u5f15\u51fa\u8d4b\u4e0a\u538b\u5165\u7684\u503c\n        this.top += 1;\n        this.stack[this.top] = v;\n    }\n\n    // \u5f39\u6808\uff0c\u8fd4\u56de\u503c\u5f39\u51fa\u4e86\u4ec0\u4e48\u503c\uff0c\u8fd4\u56de\u503c\u53ef\u4ee5\u7528\u6cdb\u578b\uff0c\u4f46\u662f\u8fd9\u91cc\u4e3a\u4e86\u7406\u89e3\u7528int\u5373\u53ef\n    public int pop() {\n        // \u5148\u628a\u5f39\u51fa\u7684\u503c\u4fdd\u5b58\u4e0b\u6765\uff0c\u65b9\u4fbf\u8fd4\u56de\uff0c\u7136\u540e\u7d22\u5f15\u51cf\u4e00\n        int popResult = this.stack[this.top];\n        this.top -= 1;\n        return popResult;\n    }\n\n    public int length() {\n        return this.top + 1;\n    }\n\n    // \u67e5\u770b\n    public void list() {\n        int len = this.length();\n        for (int i = 0; i < len; i++) {\n            System.out.printf("stack[%d] = %d", i, this.stack[i]);\n        }\n    }\n\n    public static void main(String[] args) {\n        ArrayStack arrayStack = new ArrayStack(3);\n        arrayStack.push(1);\n        arrayStack.pop();\n        arrayStack.pop();\n    }\n}   \n')),(0,r.kt)("h2",{id:"\u6570\u7ec4\u5b9e\u73b0\u6808\u7684\u95ee\u9898"},"\u6570\u7ec4\u5b9e\u73b0\u6808\u7684\u95ee\u9898"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u95ee\u98981\uff0cPUSH\u65b9\u6cd5\u7684\u8303\u56f4\u9650\u5236\u95ee\u9898\uff0c\u4e3e\u4f8b\uff0c\u5982\u679c\u6808\u91cc\u9762\u7684\u6570\u636e\u5df2\u7ecf\u8fbe\u5230\u6700\u5927\u6808\u5bb9\u91cf\u4e86\uff0c\u90a3\u4e48\u518d\u5f80\u91cc\u9762\u538b\u6808\uff0c\u5c31\u4f1a\u8fd0\u884c\u65f6\u9519\u8bef\u4e86\uff0c\u79f0\u4e3a\u8d85\u51fa\u6808\u5bb9\u91cf\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static void main(String[] args) {\n        ArrayStack arrayStack = new ArrayStack(3);\n        arrayStack.push(1);\n        arrayStack.push(2);\n        arrayStack.push(3);\n        arrayStack.push(4);\n    }\n")),(0,r.kt)("p",null,"\u7ed3\u679c\uff0c\u603b\u662f\u6570\u7ec4\u7d22\u5f15\u8d8a\u754c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 3\n    at ArrayStack.push(ArrayStack.java:20)\n    at ArrayStack.main(ArrayStack.java:45)\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u95ee\u98982\uff0cPOP\u65b9\u6cd5\u7684\u8303\u56f4\u9650\u5236\u95ee\u9898\uff0c\u4e3e\u4f8b\uff0c\u5982\u679c\u6808\u91cc\u9762\u65e0\u6570\u636e\uff0c\u90a3\u4e48\u5c31\u4f1a\u9020\u6210\u8bbf\u95ee\u4e00\u4e2a\u7d22\u5f15\u4e3a\u8d1f\u7684\u503c\uff0c\u5373\u7528\u4e0d\u5b58\u5728\u7684\u7a7a\u95f4\uff0c\u4e5f\u4f1a\u8fd0\u884c\u65f6\u9519\u8bef\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static void main(String[] args) {\n        ArrayStack arrayStack = new ArrayStack(3);\n        arrayStack.push(1);\n        arrayStack.pop();\n        arrayStack.pop();\n    }\n")),(0,r.kt)("p",null,"\u7ed3\u679c\uff0c\u603b\u662f\u6570\u7ec4\u7d22\u5f15\u8d8a\u754c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: -1\n    at ArrayStack.pop(ArrayStack.java:25)\n    at ArrayStack.main(ArrayStack.java:44)\n')),(0,r.kt)("h2",{id:"\u65b9\u6848\u4e00\u9650\u5236\u538b\u6808\u5f39\u6808"},"\u65b9\u6848\u4e00\u9650\u5236\u538b\u6808\u5f39\u6808"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728PUSH\u7684\u65f6\u5019\uff0c\u5224\u65ad\u662f\u5426\u8fbe\u5230\u6700\u5927\u5bb9\u91cf\u3002\u5373\u589e\u52a0isFull\u65b9\u6cd5\u5224\u65ad\u662f\u5426\u6808\u5bb9\u91cf\u5df2\u6ee1\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728POP\u7684\u65f6\u5019\uff0c\u5224\u65ad\u662f\u5426\u4e3a\u7a7a\u6808\u3002\u5373\u589e\u52a0isEmpty\u65b9\u6cd5\u5224\u65ad\u662f\u5426\u6808\u4e3a\u7a7a\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ArrayStack01 implements ZStack {\n    // \u6808\n    private int[] stack;\n    //    \u6808\u7684\u5927\u5c0f\n    private int maxStack;\n    //    \u7d22\u5f15\n    private int top = -1;\n\n    public ArrayStack01(int maxStack) {\n        this.stack = new int[maxStack];\n        this.maxStack = maxStack;\n    }\n\n    /*\n     * \u5224\u7a7a\n     */\n    public boolean isEmpty() {\n        return this.top == -1;\n    }\n\n    /**\n     * \u5224\u65ad\u662f\u5426\u65e0\u6cd5\u63d2\u5165\n     */\n    public boolean isFull() {\n        return this.top == this.maxStack - 1;\n    }\n\n    //    \u5165\u6808\n    public void push(int v) {\n        if (!isFull()) {\n            System.out.println(v);\n            this.top++;\n            this.stack[this.top] = v;\n        } else {\n            throw new RuntimeException("\u5df2\u8fbe\u5230\u6700\u5927\u957f\u5ea6\uff0c\u65e0\u6cd5\u538b\u6808");\n        }\n    }\n\n    //    \u51fa\u6808\u3001\u5f39\u6808\n    public int pop() {\n        if (!isEmpty()) {\n            int v = this.stack[this.top];\n            this.top--;\n            return v;\n        } else {\n            throw new RuntimeException("\u957f\u5ea6\u4e3a\u7a7a\uff0c\u65e0\u6cd5\u5f39\u6808");\n        }\n    }\n\n    public int length() {\n        return this.top + 1;\n    }\n\n    public void list() {\n        if (isEmpty()) {\n            System.out.printf("[]");\n            return;\n        }\n        int len = this.length();\n        for (int i = 0; i < len; i++) {\n            System.out.printf("stack[%d] = %d\\n", i, stack[i]);\n        }\n    }\n\n    //    \u6d4b\u8bd5\n    public static void main(String[] args) {\n        ArrayStack01 list = new ArrayStack01(10);\n//        \u538b\u6808\n        list.push(1);\n//        \u8f93\u51fa\n        list.list();\n//        \u5f39\u6808\n        list.pop();\n//        \u8f93\u51fa\n        list.list();\n//        \u5f39\u6808,\u4f46\u662f\u5df2\u7ecf\u7a7a\u4e86,\u518d\u6b21\u5f39\u6808\u62a5\u9519,\u5728\u5927\u591a\u6570\u7f16\u7a0b\u8bed\u8a00\u4e2d,\u5373\u4f7f\u7a7a\u4e86\u4e5f\u4e0d\u4f1a\u62a5\u9519,\u4f46\u662f\u8fd9\u91cc\u4f1a\u4e3a\u4e86\u8bf4\u660e\u7ec6\u8282,\u5c31\u4e3b\u52a8\u629b\u51fa\u4e00\u4e2a\u8fd0\u884c\u65f6\u9519\u8bef.\n        list.pop();\n    }\n}\n')),(0,r.kt)("h2",{id:"\u65b9\u6848\u4e8c\u52a8\u6001\u6269\u5bb9"},"\u65b9\u6848\u4e8c\u52a8\u6001\u6269\u5bb9"),(0,r.kt)("h3",{id:"\u6570\u7ec4\u9759\u6001\u6808\u7684\u81ea\u52a8\u6269\u5bb9\u7f29\u51cf\u4e86\u89e3"},"\u6570\u7ec4\u9759\u6001\u6808\u7684\u81ea\u52a8\u6269\u5bb9\u7f29\u51cf\uff08\u4e86\u89e3\uff09"),(0,r.kt)("p",null,"\u57fa\u672c\u539f\u7406\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- \u5728PUSH\u524d\u5982\u679c\u53d1\u73b0\u5bb9\u91cf\u5df2\u6ee1\uff0c\u90a3\u4e48\u81ea\u52a8\u6269\u5bb9\u6574\u4e2a\u6808\u5bb9\u91cf\u3002\n- \u5728POP\u7684\u540e\uff0c\u5982\u679c\u6709\u6548\u6570\u636e\u5c0f\u4e8e\u5bb9\u91cf1/4\uff0c\u5c31\u81ea\u52a8\u7f29\u51cf\u4e00\u534a\u5bb9\u91cf\u3002\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ArrayStack02 implements ZStack {\n    // \u6808\n    private int[] stack;\n    //    \u6808\u7684\u5927\u5c0f\n    private int maxStack;\n    //    \u7d22\u5f15\n    private int top = -1;\n\n    public ArrayStack02(int maxStack) {\n        this.stack = new int[maxStack];\n        this.maxStack = maxStack;\n    }\n\n    // \u81ea\u52a8\u6269\u5bb9,\u6269\u5bb92\u500d\uff0c\u628a\u503c\u8d4b\u503c\u4e00\u4e0b\n    public void expansion() {\n        // \u6700\u5927\u5bb9\u91cf\u7ffb\u500d\n        this.maxStack *= 2;\n        // \u4fdd\u5b58\u5f53\u524d\u7684\u6570\u7ec4\u957f\u5ea6\n        int len = this.length();\n        // \u58f0\u660e\u4e00\u4e2a\u6269\u5bb9\u5bb9\u91cf\u540e\u7684\u6570\u7ec4\n        int[] tmp = new int[this.maxStack];\n        // \u628a\u539f\u6709\u7684\u6570\u7ec4\u7684\u503c\uff0c\u8d4b\u503c\u7ed9\u4e34\u65f6\u6570\u7ec4\n        for (int i = 0; i < len; i++) {\n            tmp[i] = this.stack[i];\n        }\n        this.stack = tmp; // \u5207\u6362\u5f15\u7528\u5173\u7cfb\n    }\n\n    // \u81ea\u52a8\u7f29\u51cf\u5bb9\u91cf\uff0c\u5728POP\u7684\u65f6\u5019\uff0c\u5982\u679cPOP\u7684\u957f\u5ea6\u8fdc\u8fdc\u5c0f\u4e8e\u4e86\u5bb9\u91cf\uff0c\u90a3\u4e48\u81ea\u52a8\u7f29\u51cf\u5bb9\u91cf\uff0c\u907f\u514d\u6d6a\u8d39\u7a7a\u95f4\n    public void reduceStack() {\n        this.maxStack /= 2;\n        // \u4fdd\u5b58\u5f53\u524d\u7684\u6570\u7ec4\u957f\u5ea6\n        int len = this.length();\n        // \u58f0\u660e\u4e00\u4e2a\u7f29\u51cf\u5bb9\u91cf\u540e\u7684\u6570\u7ec4\n        int[] tmp = new int[this.maxStack];\n        // \u628a\u539f\u6709\u7684\u6570\u7ec4\u7684\u503c\uff0c\u8d4b\u503c\u7ed9\u4e34\u65f6\u6570\u7ec4\n        for (int i = 0; i < len; i++) {\n            tmp[i] = this.stack[i];\n        }\n        this.stack = tmp; // \u5207\u6362\u5f15\u7528\u5173\u7cfb\n    }\n\n    /*\n     * \u5224\u7a7a\n     */\n    public boolean isEmpty() {\n        return this.top == -1;\n    }\n\n    /**\n     * \u5224\u65ad\u662f\u5426\u65e0\u6cd5\u63d2\u5165\n     */\n    public boolean isFull() {\n        return this.top == this.maxStack - 1;\n    }\n\n    //    \u5165\u6808\n    public void push(int v) {\n        // \u68c0\u67e5\u6570\u7ec4\u7684\u6700\u5927\u5bb9\u91cf\uff0c\u5982\u679c\u5df2\u6ee1\uff0c\u90a3\u4e48\u6269\u5bb9\n        if (isFull()) {\n            this.expansion();\n        }\n        // \u6b63\u5e38\u6dfb\u52a0\n        this.top++;\n        this.stack[this.top] = v;\n        // if (!isFull()) {\n        //    System.out.println(v);\n        //    this.top++;\n        //    this.stack[this.top] = v;\n        // } else {\n        //    throw new RuntimeException("\u5df2\u8fbe\u5230\u6700\u5927\u957f\u5ea6\uff0c\u65e0\u6cd5\u538b\u6808");\n        // }\n    }\n\n    // \u51fa\u6808\u3001\u5f39\u6808\n    public int pop() {\n        if (!isEmpty()) {\n            int v = this.stack[this.top];\n            this.top--;\n            // \u5982\u679c\u7d22\u5f15\u7f29\u51cf\u540e\uff0c\u7d22\u5f15\u4f9d\u65e7\u5927\u4e8e0\uff0c\u540c\u65f6\u7d22\u5f15\u5c0f\u4e8e\u5bb9\u91cf\u76841/4\u4e86\uff0c\u90a3\u4e48\u624d\u4f1a\u7f29\u51cf\u7a7a\u95f4\n            if (this.top > -1 && (this.top <= (this.maxStack / 4))) {\n                this.reduceStack();\n            }\n            return v;\n        } else {\n            throw new RuntimeException("\u957f\u5ea6\u4e3a\u7a7a\uff0c\u65e0\u6cd5\u5f39\u6808");\n        }\n    }\n\n    public int length() {\n        return this.top + 1;\n    }\n\n    public void list() {\n        if (isEmpty()) {\n            System.out.printf("[]");\n            return;\n        }\n        int len = this.length();\n        for (int i = 0; i < len; i++) {\n            System.out.printf("stack[%d] = %d\\n", i, stack[i]);\n        }\n    }\n\n    public int getMaxStack() {\n        return maxStack;\n    }\n\n    // \u6d4b\u8bd5\n    public static void main(String[] args) {\n        ArrayStack02 list = new ArrayStack02(3);\n        // \u538b\u6808\n        list.push(1);\n        list.push(1);\n        list.push(1);\n        // \u8fbe\u5230\u6700\u5927\u5bb9\u91cf\u540e\uff0c\u4f9d\u65e7\u53ef\u4ee5\u538b\u6808\n        list.push(1);\n        list.push(1);\n        list.list();\n\n        // \u4e3e\u4f8b\u81ea\u52a8\u7f29\u51cf\u5bb9\u91cf\n        ArrayStack02 testPop = new ArrayStack02(100);\n        testPop.push(1);\n        testPop.push(2);\n        testPop.push(3);\n        testPop.push(4);\n        testPop.push(5);\n        testPop.push(5);\n        testPop.push(5);\n        testPop.pop();\n        System.out.printf("%d\\n", testPop.getMaxStack()); // 50\n        testPop.pop();\n        System.out.printf("%d\\n", testPop.getMaxStack()); // 25\n        testPop.pop();\n        System.out.printf("%d\\n", testPop.getMaxStack()); // 12\n        testPop.pop();\n        System.out.printf("%d\\n", testPop.getMaxStack()); // 6\n        testPop.pop();\n        System.out.printf("%d\\n", testPop.getMaxStack()); // 3\n        testPop.pop();\n        System.out.printf("%d\\n", testPop.getMaxStack()); // 1\n        testPop.pop();\n        System.out.printf("%d\\n", testPop.getMaxStack()); // 1\n    }\n}\n')))}k.isMDXComponent=!0}}]);