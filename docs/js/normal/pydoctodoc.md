# python语言doc转码docx

## 原理：
1. 使用python调用系统API，
2. 在系统API里面找到Office这类的api，通过word软件的宏API把doc文件在进程中打开。
3. 这就相当于用word软件打开了doc文档，
4. 在word软件里面可以另存为docx格式文件，因此也可以直接调用word软件的宏进行另存为操作。
5. 另存为保存一个新路径即可。

## 详细

### 使用pywin32，

主要用来调用系统API，找到pywin32里面的win32com下面的client包，进行宏调用,然后找到对应的word即可，拿到word软件实例。

`from win32com import client as wc`

`word = wc.Dispatch("Word.Application")`

### 准备一个文件 
```python
filename = "test.doc"
```

### 得到原始文件路径
```python
docFile = os.getcwd() + filename;
```

### 准备结果文件路径
```python
docxFile =  os.getcwd() + filename + "x";
```

### 开始转换
 ```python
 doc = word.Documents.Open(targetPath + file) #打开doc格式的word文件
 doc.SaveAs(docxPath, 12) #另存为后缀为".docx"的文件，其中参数12指docx文件
 doc.Close() #关闭原来word文件,释放内存空间
```

## 依赖文件
`requirements.txt`
`pywin32=300`
