import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react horse',
  // more config: https://d.umijs.org/config
  // 文档模式（默认值）
  //  mode: 'doc',
  // 站点模式
  // mode: 'site',
  publicPath: './',
  history: { type: 'hash' },
  resolve: {
    includes: ['docs', 'src/components'], //配置 dumi 嗅探的文档目录
  },
});
