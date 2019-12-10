
<html>
<head>
    <title>登陆</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <style>
        body{
            background: #fff;
        }
        input{
            color: white;
        }
    </style>
</head>
<body>
<div style="margin-left: 40%;width: 20%;margin-top:200px;height: 100px;">
    <h1 style="text-align: center;">登陆</h1>
    <form action="servlet?id=login" method="post" style="margin-top: 50px;text-align: center;">
        <select class="form-control">
            <option value="0">请选择职位</option>
            <option name="type">学生</option>
            <option name="type">教师</option>
            <option name="type">教务人员</option>
        </select><br>
        <input type="text" name="username" id="username" style="border: none;border-bottom: 2px solid darkturquoise;background:transparent;outline: none;width: 270px;height:30px;color: black;font-size: 17px" placeholder="请输入用户名"><br><br>
        <input type="password" name="password" id="password" style="border: none;border-bottom: 2px solid darkturquoise;background:transparent;outline: none;width: 270px;height: 30px;color: black;font-size: 17px" placeholder="请输入密码"><br><br>
        <input type="submit" value="Login" style="width: 270px;height: 35px;background-color: darkturquoise;border-radius: 8px;font-size: 17px;" class="btn_log">
    </form>
</div>
<script src="js/canvas-nest.js" type="text/javascript" color="169,169,169" opacity="0.8" count="300"></script>
<canvas id="c_n1" width="980" height="1285" style="position: fixed; top: 0px; left: 0px; z-index: -1; opacity: 0.8;"></canvas>
<script src="js/jquery.js" type="text/javascript"></script>
<script>
    $(".btn_log").click(function () {
        if($("#username").val()==""||$("#password").val()==""){
            alert("用户名或密码不能为空！");
            return false;
        }
        if($(".form-control").val()==0){
            alert("请选择职位！再登陆");
            return false;
        }
    });

</script>
</body>
</html>
