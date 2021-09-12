
//babel库及文件模块导入(特别注意:一定要将从网上copy下面的代码保存为 utf-8 格式)
const fs = require('fs');

//babel库相关，解析，转换，构建，生产
const parser = require("@babel/parser");//将JavaScript源代码转换成一棵AST树
const traverse = require("@babel/traverse").default;//遍历各个节点的函数
const types = require("@babel/types");//节点的类型判断及构造等操作
const generator = require("@babel/generator").default;//将处理完毕的AST转换成JavaScript源代码

const {$_DAE} = require("./ast_字符还原模型.js");
//读取文件
let encode_file = "./slide.7.8.3.js",decode_file = "./decode_result.js";
if (process.argv.length > 2)
{
  encode_file = process.argv[2];
}
if (process.argv.length > 3)
{
  decode_file = process.argv[3];
}

let jscode = fs.readFileSync(encode_file, {encoding: "utf-8"});
//转换为ast树
let ast    = parser.parse(jscode);

var nameArray=[];

function replace_DAE(path){
    //加密字符还原如WauO(39)还原成真实的字符串
    const {callee, arguments} = path.node;
    //是isIdentifier类型（标识符）&&只有一个参数&&这个参数的类型是数值，满足就会调用DAE就算值并替换
    if (!types.isIdentifier(callee) || arguments.length !== 1 || !types.isNumericLiteral(arguments[0])) return;

    path.replaceWith(types.valueToNode($_DAE(arguments[0].value).toString()))
}

function replace_ATpse_DAE(path){
  const {callee, arguments} = path.node;
  if (!types.isMemberExpression(callee) || arguments.length !== 1 || !types.isLiteral(arguments[0])) return;

  path.replaceWith(types.valueToNode($_DAE(arguments[0].value)))
}


function del_node_extra(path){
    // 还原"\u0024\u005f\u0049\u0042\u0052" unicode对节点extra删除还原 注:中文需要在generator代码还原时添加opts = {jsescOption: {"minimal": true}}
    delete path.node.extra

}

const visitor = {
  //TODO write your code here！
  CallExpression:{
      enter:[replace_DAE]
  },

  //还原unicode
  StringLiteral:{
      enter:[del_node_extra]
  }

}

function del_no_use(path){
  //对于没有引用变量删除
  const {id} = path.node;
  const binding = path.scope.getBinding(id.name);
  if (!binding || binding.constantViolations.length > 0) {
      return;
  }
  if (binding.referencePaths.length === 0) {
      path.remove();
  }
}

function del_tao_wa(path){
  //删除没必要的套娃节点
  if (path.node.body.length < 3) {
    return
  }
  const path_var = path.node.body[0];
  const path_function = path.node.body[1];
  if (path_var == null || !types.isVariableDeclaration(path_var) || !path_var.hasOwnProperty('declarations')) {
      return
  }
  if (path_var.declarations === undefined && path_var.declarations.length > 2) {
      return
  }
  if (!types.isMemberExpression(path_var.declarations[0].init)) {
      return
  }
  if (path_function == null && !t.isExpressionStatement(path_function)) {
      return
  }
  delete path.node.body[0];
  delete path.node.body[1];
}

// 删除无用的js代码
const remove = {
  VariableDeclarator:{
      enter:[del_no_use]
  },
  BlockStatement:{
      enter:[del_tao_wa]
  }
};


//调用插件，处理源代码
traverse(ast,visitor);
// traverse(ast,remove)


//生成新的js code，并保存到文件中输出
let {code} = generator(ast, opts = {jsescOption: {"minimal": true}});
fs.writeFile(decode_file, code, (err)=>{});
