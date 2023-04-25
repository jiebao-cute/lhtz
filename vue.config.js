const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 全局less变量存储路径 -- > 当然 这里的 ImportLessFile 是我封装的方法 
        //ImportLessFile(`${BASELESSFIlEPATH}/variable.less`),
        //ImportLessFile(`${BASELESSFIlEPATH}/mxins.less`)
        // 你可以
        path.resolve(__dirname, './src/assets/note-sidebar.less')
      ]
    }
  },
  devServer: {
    hot: true,
  }

})
