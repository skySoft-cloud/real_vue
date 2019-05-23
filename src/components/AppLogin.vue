<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <el-form ref="form" :rules="rules" :model="form" class="box-shadow-class">
            <el-form-item>
              <h3>系统登录</h3>
            </el-form-item>
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input v-model="form.pwd" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="full-width" type="primary" @click="onLogin('form')">登录</el-button>
            </el-form-item>
            <el-form-item>
              <el-button class="full-width" type="primary" @click="onRegister">注册</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AppLogin',
    data () {
      return {
        form: {
          name: '',
          pwd: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      /**
       * 登录相关事件处理
       */
      onLogin(form) {
        // 验证表单
        this.$refs[form].validate((valid) => {
          if (valid) {
            // 1.获取登陆的信息保存到localStorage
            let user_info = {
              username: this.form.name,
              pwd: this.form.pwd
            };
            if(user_info.username!="admin"||user_info.pwd!="admin"){
              this.$message({
                type: 'error',
                message: '账号密码错误!'
              });
              return false;
            }
            // 1.1使用前先清理一下localStorage
            localStorage.clear();
            // 1.2只能字符串存储
            localStorage["user_info"] = JSON.stringify(user_info);
            // 2.跳转到子页面
            this.$router.push({path: '/'})
          } else {
            this.$message({
              type: 'error',
              message: '登录失败!'
            });
            return false;
          }
        });
      },
      /**
       * 注册按钮点击事件
       */
      onRegister(){
        console.log('register!');
      }
    }
  }
</script>

<style scoped>
  .full-width {
    width: 100%;
  }

  .box-shadow-class {
    min-width: 320px;
    padding: 26px;
    box-shadow: 0 0 25px #cac6c6;
  }
  .el-main{
    overflow: initial;
  }
</style>
