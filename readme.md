# 觅长生WikiBot


# 配置需求
1. Node > 10.0
2. 需要BWIKI COOKIE
# 安装指南

```
yarn install
```

```
npm install
```

获取Wiki机器人账号和密码 **[特殊:BotPasswords](https://wiki.biligame.com/mcs/Special:BotPasswords)**


1. 打开谷歌浏览器的开发者控制台
2. 点Network(网络)
3. 然后在控制台输入下面代码记得替换机器人账号和密码
4. 看到提示 **你成功登陆账号为XXXXXX** 说明成功
5. 点Network然后点api.php-Headers-Cookie复制到.env文件
```js
var api = new mw.Api();
var params = {
	action: 'logout',
	format: 'json'
};

api.login("botUsername", "botPassword").done(function (data) {

	console.log('你成功登陆账号为' + data.login.lgusername);

	api.postWithToken('csrf', params).done(function (data) {
		console.log(data);
	});

});
```

# .env文件配置说明
## BWIKI机器人必须获取 **COOKIE!!** **COOKIE!!** **COOKIE!!** 才能运行
## 重要东西要说三遍
已经有.env.example 文件修改文件名字为.env就即可

例如觅长生wiki网址

https://wiki.biligame.com/mcs

WIKI_NAME 要填 mcs
```ini
BOT_USERNAME=输入你的机器人账号
BOT_PASSWORD=输入你的机器人密码
WIKI_NAME=mcs
WIKI_SITE=https://wiki.biligame.com/
COOKIES="这里粘贴COOKIE"
```

# 运行

```
yarn dev
```

```
npm run dev
```
