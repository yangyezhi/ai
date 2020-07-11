Vue.component('list', {
    props: ['ac1','ac2','ac3','ac4','ac5','ac6'],
    template:`
<ul class="nav navbar-nav">
                    <li v-bind:class="{active:ac1}"><a href="index.html">首页</a></li>
                    <li v-bind:class="{active:ac2}">
                        <a data-toggle="dropdown" href="#">账户管理</a>
                        <ul class="dropdown-menu dropdown-menu1">
                            <li><a href="user_info.html">资料修改</a></li>
                            <li><a href="user_pwd.html">密码修改</a></li>
                        </ul>
                    </li>
                </ul>
`,methods:{
      
    }

})

