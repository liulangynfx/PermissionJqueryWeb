function Router() {
    this.routes = {};
    this.curUrl = '';

    this.route = function (path, callback) {
        this.routes[path] = callback || function () { };
    };

    this.refresh = function () {
        this.curUrl = location.hash.slice(1) || '/';
        this.routes[this.curUrl]();
    };

    this.init = function () {
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }
}


//菜单列表
var menuList =
    [
        {
            "title": "管理员管理",
            "actionID": "A3",
            "children": [
                {
                    "actionID": "A3.1",
                    "router": "/admin-list",
                    "url": "frame-admin-list.html",
                    "title": "管理员列表"
                },
                {
                    "actionID": "A3.2",
                    "router": "/admin-role",
                    "url": "frame-admin-role.html",
                    "title": "角色管理"
                },
                {
                    "actionID": "A3.3",
                    "router": "/admin-permission",
                    "url": "frame-admin-permission.html",
                    "title": "权限管理"
                }
            ]
        },
        {
            "actionID": "A1",
            "title": "资讯管理",
            "children": [
                {
                    "actionID": "A1.1",
                    "router": "/article-list",
                    "url": "frame-article-list.html",
                    "title": "资讯管理"
                }
            ]
        },
        {
            "title": "图片管理",
            "actionID": "A2",
            "children": [
                {
                    "actionID": "A2.1",
                    "router": "/picture-list",
                    "url": "frame-picture-list.html",
                    "title": "图片管理"
                }
            ]
        },
        {
            "title": "403",
            "actionID": "-1",
            "router": "/403",
            "url": "frame-403.html"
        },
        {
            "title": "404",
            "actionID": "-1",
            "router": "/404",
            "url": "frame-404.html"
        },
        {
            "title": "首页",
            "actionID": "-1",
            "router": "/",
            "url": "frame-main.html"
        }
    ]