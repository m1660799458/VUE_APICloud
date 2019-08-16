#本项目是根据别人的来测试使用的
```javascript
"start": "npm run dev", 
"init": "node core/init-dist.js",
"dev": "npm run init && node core/dev-server.js --env-dev --config-dev --server-web",
"test-web": "npm run init && node core/build.js --env-product --config-test --server-web",
"product-web": "npm run init && node core/build.js --env-product --config-product --server-web",
"test-apicloud": "npm run init && node core/build.js --env-product --config-test --server-apicloud",
"product-apicloud": "npm run init && node core/build.js --env-product --config-product --server-apicloud",//打包成可运行的apicloud项目
"apicloud": "npm run init && node core/build.js --env-product --config-test --server-apicloud --sync"
```