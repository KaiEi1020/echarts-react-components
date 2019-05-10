# echarts-react-components

---
echarts webpack dynamic imports solution for React project 
## introduce
鉴于引入整个 react 中引入整个 echarts 项目体积偏大,so 提供了一个 echarts 动态引入方案

## install

```
$npm i @zcy/echart-react-components
```

## Usage

#### step1 修改项目 webpack 位置，增加一条 chunkFilename(为了给动态引入的文件起名)

```
output: {
      filename: '[name].bundle.js',
+     chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
```

#### step2

```js
import React, { Component } form 'react';
import AsyncComponent from 'echarts-react-components/lib/async-component';
const Pie = AsyncComponent(() => import(/* webpackChunkName: "Pie" */'echarts-react-components/lib/pie'));

```

### basic use

```js
class Demo extends React.Component {
  onChartClick = () => {};

  render() {
    const onEvents = {
      click: this.onChartClick,
    };
    return <Pie option={pieOption} onEvents={onEvents} style={{ height: 300, width: 500 }} />;
  }
}
```

## Development

```
npm install
npm start
```

## License

echarts-react-components is released under the MIT license.
