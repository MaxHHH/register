$(function () {
    var $username = $('#username')
    var $pwd = $('#password')
    var $phone = $('#phone')
    var $code = $('#code')
    var $usercheck = $('#usercheck')
    var $phonecheck = $('#phonecheck')
    var $pwdcheck = $('#passwordcheck')
    var $codecheck = $('#codecheck')
    var $codesend = $('#codesend')

    //用户名
    $(username).blur(function () {
        var user = $username.val();
        var usert1 = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]){1,7}$/
        var usert2 = /^.*[^\d].*$/
        if (user !== '') {
            $usercheck.html('');
        }
        if (user == ''){
            $usercheck.html('用户名不能为空');
        }
        if (!usert1.test(user) && !usert2.test(user)) {
            $usercheck.html('用户名仅支持中英文、数字和下划线 且不能为纯数字');
        }
    })
    //手机号
    $phone.blur(function () {
        var phone = $phone.val();
        var reg = /^1[3456789]\d{9}$/;
        if (phone == ''){
            $phonecheck.html('手机号不能为空');
            console.log("空值");
        }
        if (phone !== ''){
            $phonecheck.html('');
            console.log("正确");
        }
        if (!reg.test(phone)){
            $phonecheck.html('手机号格式不正确');
            console.log("错误");
        }
    })
    
    //密码
    $pwd.blur(function () {
        var pwd = $pwd.val();
        var pwdt = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        if (pwd !== '') {
            $pwdcheck.html('');
        }
        if (pwd == '') {
            $pwdcheck.html('密码不能为空');
        }
        if (!pwdt.test(pwd)) {
            $pwdcheck.html('密码格式不正确');
        }
    })
    //验证码
    $code.blur(function () {
        var code = $code.val();
        if (code !== '') {
            $codecheck.html('');
        }
        if (code == '') {
            $codecheck.html('验证码不能为空');
        }
    })

    $codesend.click(function() {
        var  timer, a = 60;
        timer = setInterval(function() {
            a--;
            if(a === -1) {
                clearInterval(timer);
                $codesend.val('获取验证码');
                $codesend.removeAttr('disabled');
                $codecheck.html('');
            }else [
                $codesend.val(a)
            ]
        },1000);
    })
})