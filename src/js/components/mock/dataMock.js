import Mock from 'mockjs';
Mock.setup({
  timeout: 2000
});
Mock.mock('/dignosis', 'get', function () {
  return Mock.mock({
    "data|1-6": [{
      'id|+1': 12,
      'name|1': ["tom", "jerry", "susan"],
      'age|18-28': 0,
      'sex|1': ['男', '女']
    }]
  })
})