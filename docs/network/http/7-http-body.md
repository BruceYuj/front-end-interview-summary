---
title: HTTP 当中的 body
autoPrev: "6-Why-design-MIME"
---


1.	HTTP的实体数据 >>

A.	数据类型与编码 >>
HTTP 协议是应用层协议，数据到达之后需要告诉上层应用数据的类型
HTTP 通过 “多用途互联网邮件扩展”(Multipurpose Internet Mail Extensions) 来标记 body 的数据类型，简称为 MIME type


1.	编码格式（encoding type） >>

a)	1. gzip >>
GNU zip 压缩格式，最流行

b)	2. deflate >>
zlib 压缩格式，次流行

c)	3. br >>
专门为 HTTP 优化的新压缩算法（brotli）

2.	MIME type >>

a)	1. text >>
表示文本格式的可读数据，比如 text/html， text/plain，text/css

b)	2. image >>
图像文件，比如 image/gif，image/jpeg

c)	3. audio/video >>
音频和视频数据，比如 audio/mpeg，video/mp4

d)	4. application >>
数据格式不固定，可能是文本也可能是二进制，由上层程序解释。比如 application/json，application/javascript，application/pdf，application/octet-stream

3.	“内容协商” >>
HTTP 定义了两个 Accept 请求头字段和两个 Content 实体头字段用于客户端和服务器进行内容协商

a)	  >>

B.	语言类型与编码 >>
国际化问题，引入概念：语言类型和字符集
语言类型指的人类使用的自然语言，比如英语/日语，自然语言下面可能使用具体的地方性方言，比如 en 表示任意盈余， en-US 表示美式英语，zh-CN 表示汉语。
HTTP 协议仍然使用 Accept 请求头字段和 Content 实体头字段来进行“内容协商”

1.	语言类型使用的头字段 >>

a)	Accept-Language字段 >>

 

b)	Content- Language >>

 

2.	字符集使用的头字段 >>

a)	Accept-Charset >>
 
通常来讲现代浏览器都支持多种字符集，因此不会发送 Accept-Charset，而服务器也一般不会发送 Content-Language，可以有字符集推断出来。

3.	  >>

C.	内容协商的质量值 >>
通过 q 参数来设定优先级，表示 quality factor。最大值是 1（默认），最小值是 0.01，为 0 表示拒绝。

1.	  >>
这里 ';' 的断句优先级小于 ','。这里表示最希望使用 HTML，权重为 1；其次是 XML 文件，权重是 0.9；最后是任意数据类型，权重是 0.8

D.	Vary 字段 >>

E.	  >>

F.	这里需要注意，content-*是实体字段，因此既可以使用在请求头也可以在响应头。我们在 post 请求时，一般会有 body 数据，因此我们需要带上相应的 content-* 这几个字段。 >>

