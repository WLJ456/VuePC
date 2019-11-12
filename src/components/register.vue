<template>
  <div class="reg_container">
    <div class="reg_box">
      <!-- 顶部返回按钮 -->
      <div class="backLogin" @click="backLogin">
        <i class="el-icon-arrow-left"></i> 返回
      </div>
      <!-- 顶部图标 -->
      <div class="icon_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 注册区域 -->
      <el-form label-width="0px" :rules="regRlues" :model="form" class="reg_form" ref="regRef">
        <el-form-item prop="user">
          <el-input
            class="reg_user"
            prefix-icon="el-icon-user"
            v-model="form.user"
            maxlength="13"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            type="password"
            class="pwd"
            prefix-icon="el-icon-lock"
            maxlength="16"
            v-model="form.pwd"
            placeholder="输入密码"
            show-password="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="ckpwd">
          <el-input
            type="password"
            class="check_pwd"
            prefix-icon="el-icon-lock"
            maxlength="16"
            v-model="form.ckpwd"
            placeholder="再次输入密码"
            show-password="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="tel">
          <el-input
            type="text"
            prefix-icon="el-icon-phone"
            class="tel"
            maxlength="11"
            v-model="form.tel"
            placeholder="手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            type="text"
            prefix-icon="el-icon-success"
            class="code"
            v-model="form.code"
            placeholder="验证码"
          ></el-input>
          <el-button type="info" class="get_code" @click="getCode">立即获取</el-button>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="register">注册</el-button>
          <el-button type="danger" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: '',
        pwd: '',
        ckpwd: '',
        tel: '',
        code: ''
      },
      regRlues: {
        user: [
          { required: true, message: '账号不能为空' },
          { max: 13, min: 3, message: '账号必须为3~13位的字符' }
        ],
        pwd: [
          { required: true, message: '密码不能为空' },
          {
            max: 16,
            min: 3,
            message: '密码必须为3~16位的字符'
          }
        ],
        ckpwd: [
          { required: true, message: '密码不能为空' },
          {
            max: 16,
            min: 3,
            message: '密码必须为3~16位的字符'
          }
        ],
        tel: [
          { required: true, message: '电话不能为空' },
          { max: 11, min: 11, message: '请输入11位手机号' }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { max: 4, min: 4, message: '请输入4位验证码' }
        ]
      }
    };
  },
  methods: {
    resetForm() {
      this.$refs.regRef.resetFields();
    },
    register() {
      this.$refs.regRef.validate(valid => {
        if (!valid) {
          console.log(valid);
        }
      });
    },
    backLogin() {
      this.$router.push('login');
    },
    getCode() {
      console.log('获取验证码');
    }
  }
};
</script>

<style lang="less">
.reg_container {
  height: 100%;
  width: 100%;
  background-color: #bbe6d6;
  .reg_box {
    width: 450px;
    height: 600px;
    background: rgba(255, 254, 254, 0.945);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 1px 2px 2px rgb(231, 230, 230);
    .backLogin {
      height: 30px;
      position: absolute;
      left: 25px;
      top: 25px;
      color: #669a9c;
      font-size: 18px;
    }
    .backLogin:hover {
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .icon_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0px 0px 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .reg_form {
    position: absolute;
    bottom: 10%;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: bolder;
    .code {
      width: 40%;
      float: left;
    }
    .get_code {
      float: right;
    }
  }
}
</style>
